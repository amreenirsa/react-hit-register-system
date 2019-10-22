import React, { Component } from 'react';
import * as firebase from 'firebase';



class HutRegistration extends Component {
    constructor() {
        super();
        this.state = {
            huts: []
            
        }
    }




    hut(ev) {
        ev.preventDefault();

        const hutname = this.refs.hutname.value;
        const detail = this.refs.detail.value;
        const location = this.refs.location.value;
        const price = this.refs.price.value;
        
        if (!hutname ||  !detail  || !location || !price) {
          alert("all fields are required");
        } 
        else {
            var hut = {
                hutname: this.refs.hutname.value,
                detail: this.refs.detail.value,
                location: this.refs.location.value,
                price:this.refs.price.value,
                uid: firebase.auth().currentUser.uid
            }
            var allhuts = firebase.database().ref();
            const allhuts1 = allhuts.child("huts").push(
                hut
            )
            this.setState({
                huts: [...this.state.huts, hut]
            })
            alert("registered your hut");
            this.refs.hutname.value="";
            this.refs.detail.value="";
            this.refs.location.value="";
            this.refs.price.value="";
        }
    
    }

    

   
  render () {
    return (
    <div>
        <div className="hutwraper">
        
          <h1>registered your hut !</h1>
          <input type="text" ref="hutname" placeholder="hut name" /> <br />
          <textarea  ref="detail" > hut detail</textarea><br />
          <input type="text" ref="location" placeholder="location" /><br />
          <input type="number" ref="price" placeholder="price" /> <br />
          <button  onClick={this.hut.bind(this)}>POST</button>
        </div>

    </div>  


)
  }
}  
  export default HutRegistration;