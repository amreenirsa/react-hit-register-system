import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as firebase from 'firebase';

import AllRegisteredHut from './allregisteredhut';
import BookingHut from './bookinghut';
import ViewBooking from './viewbooking.js';
import Feedback from './feedback.js';
import MyBoking  from './mybooking.js';




class User extends Component {
    constructor() {
        super();
            this.state = {
                user: {
                    name: null,
                    email: null,
                    type:null,
                    uid: null
                
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
  
  render () {
    return (

            <Router>
                <div>
                    <div className="leftpanel col-sm-4">

                        <div className="img"></div>
                        <div className="userInfo">
                          <h1>User Information</h1>
                          <h4><b>  Name  : </b> {this.state.user.name} </h4>
                          <h4><b>  Email : </b> {this.state.user.email} </h4>
                          <h4><b>  Type  :  </b>{this.state.user.type}</h4>
                        </div>
            
                        

                        <button type="button" >
                        <NavLink to="/allregisteredhut" >View huts</NavLink>
                        </button>

                        <button type="button" >
                        <NavLink to="/mybooking" >your booking</NavLink>
                        </button>

                        <button type="button" >
                        <NavLink to="/viewBooking" >View Booking</NavLink>
                        </button>

                         <button type="button" >
                        <NavLink to="/feedback" >Feedback</NavLink>
                        </button>
                        
                        
                        
                        
                    </div>

                    <div className="rightpanel col-sm-7">
                        <Route path="/allregisteredhut" component={AllRegisteredHut} />
                        <Route path="/bookinghut/:name" component={BookingHut} />
                        <Route path="/mybooking" component={MyBoking} />
                        <Route path="/viewbooking" component={ViewBooking} />
                        <Route path="/feedback" component={Feedback} />
                      
                      
                      
                      
                     </div>
                </div>
            </Router>
        
    )
  }
}


export default User ;