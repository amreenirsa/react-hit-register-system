import React, { Component } from 'react';
import {  BrowserRouter as Router,
        NavLink} from 'react-router-dom';



    


import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import * as firebase from 'firebase';


        





        
class Button extends Component {
    constructor() {
      super();
      this.state = {
      user:{
          name: null,
          email: null,
          uid: null,
          checkOwner: false,
          checkuser: false,
          
        }
      }
    }
  
  componentWillMount(){
    
    firebase.auth().onAuthStateChanged((user)=>{
     
      if (user) {
        this.setState({
            user:{
            name : user.displayName,
            email : user.email,
            photoUrl : user.photoURL,
            emailVerified : user.emailVerified,
            uid : user.uid
        }})
        if (firebase.auth().currentUser) {
          var currentEmail = firebase.auth().currentUser.email;
          var typeCheck;
          var userId = firebase.auth().currentUser.uid;
          const rootRef= firebase.database().ref();
          const speedRef = rootRef.child('user/'+userId);
          speedRef.on('value',snap => {
              typeCheck=snap.val().type;
              
              if(typeCheck==='owner'){
                                      
                  this.setState({
                      checkOwner: true
                  })
              }
              if(typeCheck==='user'){
                                      
                this.setState({
                    checkuser: true
                })
            }
          })
        }
        
      }
      
      else{
        this.setState({
          user:{
            name : null,
            email : null,
            uid : null 
          }
        })
      }
    })
  }
        
      
    
    

          
render() {
    return (   
        <div>
            {!this.state.user.email?
                    <ul className="nav navbar-nav navbar-right">
                    <li><NavLink to="/home" activeClassName="active"><span className="glyphicon glyphicon-home"></span> home</NavLink></li>
                    <li><NavLink to="/signUp" activeClassName="active"><span className="glyphicon glyphicon-user"></span> Sign Up</NavLink></li>
                    <li><NavLink to="/signIn" activeClassName="active"><span className="glyphicon glyphicon-log-in"></span> Sign In</NavLink></li>
                    </ul>:
                    <ul className="nav navbar-nav navbar-right">
                    <li><NavLink to="/home" activeClassName="active"><span className="glyphicon glyphicon-home"></span> home</NavLink></li>
                    {this.state.checkOwner ?
                    <li><NavLink activeClassName="active" to="/owner" ><span className="glyphicon glyphicon-user"></span>{this.state.user.name}</NavLink></li>
                    :
                    <li><NavLink activeClassName="active" to="/user" ><span className="glyphicon glyphicon-user"></span>{this.state.user.name}</NavLink></li>}
                        
                        
                        
                        
                        <li><NavLink activeClassName="active" to="/" onClick={()=>{firebase.auth().signOut()}}>
                        <span className="glyphicon glyphicon-log-out"></span> Signout</NavLink></li>   
                    </ul> 
         }
            
        </div> 
              
              
              
    )
                               
}}
          
          
export default Button;