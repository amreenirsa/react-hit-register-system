import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


import * as firebase from 'firebase';
import paris from './img/paris.jpg';
import newyork from './img/newyork.jpg';
import sanfran from './img/sanfran.jpg';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';








const styles = {
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      marginTop: 8,
      marginLeft:'auto',
      marginRight:'auto',
      
      
    },


    dialouge2:{

        height: '580px',
        width: '100%',
        marginLeft:'auto',
        marginRight:'auto',
        
        
  
      },
}



        





        
class AllRegisteredHut extends Component  {

    constructor() {
        super();
            this.state = {
                huts: [],
                hutKeys:[],
                
                checkUser:false,
                
           
       
                
                
            }
        }
    
          componentDidMount(){
            firebase.auth().onAuthStateChanged(()=>{
                var typeCheck;
                var userId = firebase.auth().currentUser.uid;
                const rootRef= firebase.database().ref();
                const speedRef = rootRef.child('user/'+userId);
                speedRef.on('value',snap => {
                 typeCheck=snap.val().type;
                    if(typeCheck==='user'){
                        this.setState({
                            checkUser:true
                        })
                    }
                })
                firebase.database().ref("huts").on("value", snap=>{
                    let obj = snap.val();
                    console.log(obj);
                    let huts = [];
                    let hutKeys=[];
                    for(let key in obj){
                        hutKeys.push(key)
                        huts.push(
                        obj[key]
                        )
                    }
                    this.setState({
                            huts:huts,
                            hutKeys:hutKeys
                    })                      
                })
               
            })
        }
        
        deletehut(index){
            var key= this.state.hutKeys[index];
            firebase.database().ref('huts/'+key).remove();
        }
        Applyhut(index){
            
            var currentUser= firebase.auth().currentUser;
            var currentId= firebase.auth().currentUser.uid;
            firebase.database().ref("bookingform/"+currentId).on("value",snap=>{
                let obj=(snap.val() || {
                 name: currentUser.displayName,
                 email: currentUser.email,
                });
            
                var rootRef=firebase.database().ref();
                const speedRef=rootRef.child("huts/"+this.state.hutKeys[index]+"/apply/"+currentId).set(obj)
            })
            alert("xxxxxxxxxxxxxx")
        }
       
     
      
        
render() {
   
    return (   
        
    <div>
        
        <div className="registeredhut">
            {this.state.huts.map((hut,index)=>(
                <div className="registeredhutbox" key={index}>
                    <div className="thumbnail">
                        <img src={paris}  alt="New York"/>
                            <h2><strong> hut name: </strong>   {hut.hutname} </h2>
                                                            <p>
                                                                <span><strong>detail:</strong> {hut.detail}  </span>
                                                                
                                                            </p>
                                                           
                                                                <p><span><strong>location: </strong>{hut.location} </span></p>
                                                                <p><span><strong>price: </strong>{hut.price}</span></p>
                                                                
                                                                {this.state.checkUser?
                                                                
                                                                <span>
                                                                    
                                                                    <NavLink to={`/bookinghut/${hut.hutname}`}> <button  >Booking</button></NavLink>
                                                                   
                                                                    
                                                                    
                                                                    </span>
                                                                   :
                                                                    <NavLink to='signIn'><button >For booking Please SignIn</button></NavLink> }
                                                                
                                                           
                    </div>   
                </div>    ))}
                                                             
        </div>
    </div>
              
    )
                               
}}
          
          
export default AllRegisteredHut;