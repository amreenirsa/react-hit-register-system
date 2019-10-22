import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as firebase from 'firebase';


import HutRegistration from './hutregistration.js';
import RegisteredHut from './registeredhut.js';
import ViewBooking from './viewbooking.js';
import ViewFeedBack from './viewFeedBack.js'



    








        
class Owner extends Component {
   
  
    constructor() {
        super();
            this.state = {
                user: {
                    name: null,
                    email: null,
                    type:null,
                    uid: null,
                    
                
                }
           }   
        }
            componentDidMount() {
                firebase.auth().onAuthStateChanged(()=>{
                    if(firebase.auth().currentUser){
                        var Rootref=firebase.database().ref().child("user/"+firebase.auth().currentUser.uid);
                        Rootref.on("value",snap=>{
                            let currentUserObj = snap.val()
                            this.setState({
                                user: currentUserObj
                            })
                        })
                    }
                    
                })
                      
            }
        
      
    
    

          
render() {
    return (
    <Router>   
        <div>
            <div className="leftpanel col-sm-4">
                                <div className="img"></div>
                                <div className="userInfo">
                                    <h1>User Information</h1>
                                    <h4>  <b> Name : </b> {this.state.user.name} </h4>
                                    <h4>  <b>Email : </b> {this.state.user.email} </h4>
                                    <h4>  <b>Type : </b> {this.state.user.type}</h4>
                                    
                                </div>
                        
                                <button type="button" >
                                <NavLink to="/hutregistration" >Hut registration</NavLink>
                                </button>

                                <button type="button" >
                                <NavLink to="/registeredhut" >your Registered Hut</NavLink>
                                </button>

                    

                                <button type="button" >
                                <NavLink to="/viewbooking" >ViewBooking</NavLink>
                                </button>

                                <button type="button" >
                                <NavLink to="/viewFeedBack" >View Feedback</NavLink>
                                </button>
            </div>

                            <div className="rightpanel col-sm-7">
                            <Route path="/hutregistration" component={HutRegistration} />
                            <Route path="/registeredhut" component={RegisteredHut} />
                            <Route path="/viewbooking" component={ViewBooking}/>
                            <Route exact path="/viewFeedBack" component={ViewFeedBack} />
                           
                        
                        
                            </div>
                
                
        
        </div> 
    </Router>       
              
              
    )
                               
}}
          
          
export default Owner;