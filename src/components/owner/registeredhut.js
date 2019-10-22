import React, { Component } from 'react';
import * as firebase from 'firebase';
import paris from './img/paris.jpg';



class RegisteredHut extends Component {
    constructor() {
        super();
        this.state = {
            huts: [],
            keys: [],
            hutKeys:[],
            
            
            
        
           
            
        }
    }


   
    componentDidMount() {
        firebase.auth().onAuthStateChanged(() => {
            if (firebase.auth().currentUser) {
                firebase.database().ref('huts').orderByChild('uid').equalTo(firebase.auth().currentUser.uid).on('value', snap => {
                    var obj = snap.val();
                   
                   
                    let keys = [];
                    let huts = [];
                    let hutKeys=[];
                    let booking=[];
                    for (let key in obj) {
                        keys.push(key);
                        huts.push(obj[key]);
                        hutKeys.push(key);
                        
                    }
                    
                    this.setState({ huts, keys , hutKeys , 
                       })
                    // console.log(this.state.huts);
                })
                
            }
        
        })
    }

    deletehut(index){
        var key= this.state.hutKeys[index];
        firebase.database().ref('huts/'+key).remove();
    }

   
  render () {
    return (
      <div>
        <div className="registeredhut">
        
            <h1>Your Registered huts</h1>
            {this.state.huts.map((hut, index) => (
                <div className="registeredhutbox" key={index}>
                    <div className="thumbnail">
                    <img src={paris}  alt="New York"/>
                    <h2><strong> hut name: </strong>   {hut.hutname} </h2>
                    <p>
                        <span><strong>detail:</strong> {hut.detail}  </span>
                        
                    </p>
                    <p><span><strong>location: </strong>{hut.location} </span></p>
                    <p><span><strong>price: </strong>{hut.price}</span></p>
                        
                    
                </div>   
                    
               
               {<button onClick={this.deletehut.bind(this,index)}>Delete</button>}
                </div>
            ))}
        
</div>
</div>


)
}
}
  
  
  export default  RegisteredHut ;