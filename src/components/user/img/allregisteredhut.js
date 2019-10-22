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


import BookingForm from './bookingform';

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
                //diaouge
            open: false,
       
                
                
            }
        }
        //diaouge
        handleOpen = () => {
            this.setState({open: true});
          };
        
          handleClose = () => {
            this.setState({open: false});
          };
        componentDidMount() {
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
                    var currentUser = firebase.auth().currentUser;
                    if(currentUser){
                      var userId = currentUser.uid;
                      const rootRef = firebase.database().ref();
                      const speedRef = rootRef.child('bookingform/'+userId);
                      speedRef.on('value', snap => {
                        var userObj = snap.val();
                        this.setState({ user: userObj 
                        });
                        if(userObj&&this.refs.name){
                            this.refs.name.value = userObj.name;
                            this.state.starttime = userObj.starttime;
                            this.state.endtime = userObj.endtime;
                            this.state.date = userObj.date;
                          
                        } 
                      })
                    }
                
            
                firebase.database().ref('huts').orderByChild('uid').on('value', snap => {
                    var obj = snap.val();
                    let keys = [];
                    let huts = [];
                    let hutKeys=[];
                    for (let key in obj) {
                        keys.push(key);
                        huts.push(obj[key]);
                        hutKeys.push(key)
                    }
                    
                    this.setState({ huts, keys , hutKeys })
                    // console.log(this.state.huts);
                })                      
            })
           
       
    }

    edit(index) {
        const name = this.refs.name.getValue();
        const starttime = this.state.starttime;
        const endtime = this.state.endtime;
        const date = this.state.date;
       
        if (!name || !starttime|| !endtime|| !date ) {
          alert("all fields are required");
        } 
        else {
            var currentUser= firebase.auth().currentUser;
            var currentId= firebase.auth().currentUser.uid;
            firebase.database().ref("bookingform/"+currentId).on("value",snap=>{
                let obj=(snap.val() || {
                 name: currentUser.displayName,
                 email: currentUser.email,
                });
            
                var rootRef=firebase.database().ref();
                //this.props.history.push('/User');
                const speedRef=rootRef.child("huts/"+this.state.hutKeys[index]+"/apply/"+currentId).set({
      
                    name: name,
                    starttime: starttime,
                    endtime: endtime,
                    date: date,
                    
                   
            
                  });
                  alert("Data has been updated success")
                // this.props.history.push('/User');
            })
        
         
        }
    
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
        onClick={this.edit.bind(this)}
        
        
        />,
    ];
    return (   
        
    <div>
        
        <div id="portfolio"  className="container-fluid text-center bg-grey">
            <div className="row text-center slideanim">
                                {this.state.huts.map((hut,index)=>(
                                
                                        <div className="col-sm-4" key={index}>
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
                                                                    <button onClick={this.handleOpen} >Booking</button>
                                                                    <Dialog
                                                                        title=""
                                                                        actions={actions}
                                                                        modal={false}
                                                                        open={this.state.open}
                                                                        onRequestClose={this.handleClose}
                                                                        style={styles.dialouge2}>
                                    
                                                                       
                                                                        
                                                                    <div className="bookingform">

                                                                        <h1>booking form</h1>
                                                                        <p>Name <br/>
                                                                            <TextField style={styles.textField}
                                                                                hintText="E-Mail"
                                                                                floatingLabelText="Enter E-Mail"
                                                                                ref="name"
                                                                                                        
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
                                                                                                                            
                                                                        






                                                                        </div>
                                    
                                                                    </Dialog>
                                                                    </span>
                                                                   :
                                                                    <NavLink to='signIn'><button >For booking Please SignIn</button></NavLink> }
                                                                
                                                           
                                                </div>   
                                        </div>    ))}
            </div>                                                  
        </div>
    </div>
              
    )
                               
}}
          
          
export default AllRegisteredHut;