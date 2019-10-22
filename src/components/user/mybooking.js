import React, { Component } from 'react';
import * as firebase from 'firebase';
import paris from './img/paris.jpg';



class MyBoking extends Component {
    constructor() {
        super();
        this.state = {
            booking: [],
            keys: [],
            check: false
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(() => {
            if (firebase.auth().currentUser) {
                firebase.database().ref('booking').orderByChild('uid').equalTo(firebase.auth().currentUser.uid).on('value', snap => {
                    var obj = snap.val();
                    let keys = []
                    let booking = [];
                    for (let key in obj) {
                        keys.push(key);
                        booking.push(obj[key]);
                    }
                    // console.log(jobs);
                    this.setState({ booking: booking, keys: keys })
                    console.log(this.state.booking);
                    console.log(this.state.keys);
                })

            }
        })
    }
    deleteBooking(index) {
        // console.log(this.state);
        // console.log(index);
        // console.log(this.state.keys);
        var key = this.state.keys[index];
        firebase.database().ref('booking/' + key).remove();

    }
    render() {
        return (
            <div className="registeredhut">
                
                    
                        
                            <h1>Your Bookings</h1>
                            {this.state.booking.map((data, index) => (

                                <div className="registeredhutbox" key={index}>
                                   <h2><strong> Area Name:</strong> {data.hutname} <br /></h2>
                                   {/* Slot No: {data.slot}   <br />*/} 
                                   <p> <span><strong>  Date: :</strong>{data.date} </span></p>
                                   <p> <span><strong>Start Time: :</strong> {data.startTime} </span></p>
                                   <p> <span><strong> End Time::</strong> {data.endTime} </span></p>
                                    <button onClick={this.deleteBooking.bind(this, index)}>Cancel</button>

                                </div>
                            ))}
                       
                   
                    }
            </div>
        );
    }
}
export default MyBoking ;