import React, { Component } from 'react';
import * as firebase from 'firebase';
import paris from './img/paris.jpg';


class ViewBooking extends Component {
    
    constructor() {
        super();
        this.state = {
            booking: [],
            Keys: [],
         //   checkOwner: false
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(() => {
           // if (firebase.auth().currentUser) {
            //    var currentEmail = firebase.auth().currentUser.email;
            //    var typeCheck;
             //   var userId = firebase.auth().currentUser.uid;
             //   const rootRef= firebase.database().ref();
             //   const speedRef = rootRef.child('user/'+userId);
              //  speedRef.on('value',snap => {
              //      typeCheck=snap.val().type;
                    
                //    if(typeCheck==='owner'){
                                            
                  //      this.setState({
                          ///  checkOwner: true
                  //      })
                //    }
              //  })

                firebase.database().ref("booking").on("value", snap => {
                    let obj = snap.val();
                    // console.log(obj);
                    let booking = [];
                    let Keys = [];
                    for (let key in obj) {
                        Keys.push(key)
                        booking.push(
                            obj[key]
                        )
                    }
                    // console.log(jobKeys);
                    this.setState({
                        booking: booking,
                        Keys: Keys
                    })
                    // console.log(this.state);
                })
        //    }
     })
    }

    deleteBooking(index) {
        var key = this.state.Keys[index];
        firebase.database().ref('booking/' + key).remove();

    }
    render() {
        return (
            <div className="registeredhut">
                
                    
                       
                            <h1>All Bookings</h1>
                            {this.state.booking.map((data, index) => (

                                <div className="registeredhutbox" key={index}>
                                   
                                   <h2><strong> Hut Name: </strong>{data.hutname} </h2>
                
                                   <p> <span><strong> Date:</strong> {data.date} </span></p>
                                   <p> <span><strong> Start Time: </strong> {data.startTime} </span></p>
                                   <p> <span><strong> End Time: </strong>{data.endTime}</span></p>
                                   
                                        <button onClick={this.deleteBooking.bind(this, index)}>Cancel</button>
                                        
                                </div>
                            ))}
                       
                    
            </div>
        );
    }
}
    
    
    export default ViewBooking ;