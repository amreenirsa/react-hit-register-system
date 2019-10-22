import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


import * as firebase from 'firebase';
import paris from './img/paris.jpg';
import newyork from './img/newyork.jpg';
import sanfran from './img/sanfran.jpg';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';




const styles = {
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      marginTop: 8,
      marginLeft:'auto',
      marginRight:'auto',
      
      
    },


}



        





        
class Bookingform extends Component  {

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
    //dialouge
    const actions = [
        <FlatButton
        label="Cancel"
        primary2={true}
        onClick={this.handleClose}
        />,
        <FlatButton
        label="Submit"
        primary2={true}
        keyboardFocused={true}
      
        
        
        />,
    ];
    return (   
        
    <div>
        
        <div id="portfolio"  className="container-fluid text-center bg-grey">
          
                                {this.state.huts.map((hut,index)=>(
                                
                                                                    
                                                                 
                                                                   
                                    
                                                                    
                                                                        
                                                                    <div className="bookingform">
                                                                    <button onClick={this.Applyhut.bind(this,index)} >Booking</button>

                                                                        <h1>booking form</h1>
                                                                        <p>Name <br/>
                                                                            <TextField style={styles.textField}
                                                                                hintText="E-Mail"
                                                                                floatingLabelText="Enter E-Mail"
                                                                                ref="name"
                                                                                                        
                                                                            /> </p>
                                                                            <p>Name <br/>
                                                                            <TextField style={styles.textField}
                                                                                hintText="xx"
                                                                                floatingLabelText="Enter E-Mail"
                                                                                ref="xx"
                                                                                                        
                                                                            /> </p>


                                                                        <p>booking Time: <TimePicker
                                                                                        hintText="To"
                                                                                        autoOk={true}
                                                                                        // ref="starttime"
                                                                                        onChange = {(event,newValue) => this.setState({starttime:newValue})}
                                                                                        />  </p>

                                                                        <p>end time: <TimePicker
                                                                                        hintText="end"
                                                                                        autoOk={true}
                                                                                        onChange = {(event,newValue) => this.setState({endtime:newValue})}
                                                                                        // ref="endtime"
                                                                                        />  </p>

                                                                        <p><span><strong>booking date:</strong> <DatePicker hintText="date" mode="landscape"  
                                                                        //ref="date"
                                                                        onChange = {(event,newValue) => this.setState({date:newValue})} /> </span> </p>
                                                                    </div>))}
                                                                                                                            
                                                                        





  
        </div>
    </div>
              
    )
                               
}}
          
          
export default Bookingform;