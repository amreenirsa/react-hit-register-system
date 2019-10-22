import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import {blueGrey500} from 'material-ui/styles/colors';

import * as firebase from 'firebase';




const styles = {
    div:{
      display: 'flex',
      flexDirection: 'row wrap',
      marginTop: 20,
      width: '95%',
    },
    paper1:{
      flex: 1,
      height: '500px',
      width: '100%',
      borderWidth:'1px',
      borderColor: blueGrey500,
      borderStyle:'solid',
      margin: 0,
      textAlign: 'center',

    },
    
    textField:{
        width: '80%',
        fontSize: '1em',

    },

    button:{
        width: '80%',
        fontSize: '1em',
        marginTop: '10%',
      //  backgroundColor: '#00bcd4',

    }

    
  };


class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            dataSource: [],
//firebase
        userType: null,
        error :{
                message : ''
            }
        }
     

        
           
    
}



setUser(event) {
    this.setState({
        userType: event.target.value
    })
console.log(event.target.value);
}

signUp(){
    var userEmail = this.refs.email.getValue();
    var userPass = this.refs.pass.getValue();
    var name = this.refs.name.getValue();
   

    if (!userEmail || !userPass || !name ) {
        alert("all fields are required");
      } 
    else {

        const auth=firebase.auth();
        auth.createUserWithEmailAndPassword(userEmail,userPass).catch(error => {
            this.setState({error})
        })
        .then(data=>{
            firebase.auth().currentUser.updateProfile({
                displayName:this.refs.name.getValue(),
            })
            var rootRef=firebase.database().ref();
            const speedRef=rootRef.child('user/'+firebase.auth().currentUser.uid).set({
                email: userEmail,
                password: userPass,
                name: this.refs.name.getValue(),
                type:this.state.userType
            })
            .then(()=>{
                var typeCheck;
                var userId = firebase.auth().currentUser.uid;
                const rootRef= firebase.database().ref();
                const speedRef = rootRef.child('user/'+userId);
                speedRef.on('value',snap => {
                    typeCheck=snap.val().type;
                    
                    if(typeCheck==='owner'){
                        this.props.history.push('/owner');
                    }
                    if(typeCheck==='user'){
                        this.props.history.push('/user');
                    }
                
                }) })
            
            })
            .catch(error => {
                this.setState({error})
            })
        
            this.refs.name.valu="";
            this.refs.email.value="";
            this.refs.pass.value="";
    
    }
}
    
    render() {
        return (
            <div>
                <div className="col-lg-8">
            
            </div>
    
                <div className="col-lg-4">      
                            <div style={styles.div}>
                                <Paper  style={styles.paper1} zDepth={3}>
                                    <h2 > SignUp </h2>

                                    <form onSubmit={ev=>ev.preventDefault()}>
                                        <TextField style={styles.textField}
                                            hintText="User Name"
                                            floatingLabelText="Enter User Name"
                                            ref='name'
                                            
                                        /><br />

                                        <TextField style={styles.textField}
                                            hintText="E-Mail"
                                            floatingLabelText="Enter E-Mail"
                                            ref='email'
                                            
                                            
                                            
                                        /><br />
            
                                        <TextField style={styles.textField}
                                            hintText="Password Field"
                                            floatingLabelText="Password"
                                            type="password"
                                            ref= 'pass' 
                                            
                                            
                                        /><br />

                                         <div className="row">
                                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                                            <div className="form-group" onChange={this.setUser.bind(this)}>  
                                                                    
                                                                <input type="radio" 
                                                                
                                                                className="radio-inline"
                                                                
                                                                value="owner" name="user" 
                                                                

                                                                 />  Hurt Owner
                                                                        
                                                                        
                                                                <input type="radio" 
                                                                className="radio-inline"
                                                                value="user" name="user"
                                                                
                                                               
                                                                /> User
                                                            </div>
                                                        </div>
                                                    </div>

                                        <RaisedButton style={styles.button} 
                                        label="SignUp" secondary={true} 
                                        onClick={this.signUp.bind(this)}
                                        
                                        />


                                       
                                  
                                        <p className="error">
                                        {this.state.error.message} 
                                        </p>
                                                    
                                   
                                        <Link to ={'/signIn'}>
                                            <p className="error">Already a user ? Sign in instead</p> 
                                        </Link>
                                    </form>
                                </Paper>
                            </div>
            </div>               
                   
                    </div>
                
        )
        
        
        
    }
    
    
    
}
    
    
export default SignUp;