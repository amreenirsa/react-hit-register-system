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
       // backgroundColor: '#00bcd4',

    }

    
  };


class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
        dataSource: [],
//firebase
        signMessage: null ,
        error :{
                message : ''
               }

   
      };
    }
      handleUpdateInput = (value) => {
        this.setState({
          dataSource: [
            value,
            value + value,
            value + value + value,
          ],
        });
      };

      signIn(){
        var userEmail = this.refs.email.getValue();
        var userPass = this.refs.pass.getValue();
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(userEmail,userPass)
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
                
                })
        })
        .catch(error => {
            this.setState({error})
        })
    }
   


      

    render() {
        return (
            <div>
            <div className="col-lg-8">
            
            </div>
                <div className="col-lg-4">
                        
                            <div style={styles.div}>
                                <Paper  style={styles.paper1} zDepth={3}>
                                    <h2 > SignIn </h2>

                                    
                                    <form onSubmit={(ev)=>{ev.preventDefault();(this.signIn.bind(this))()}}>
                                        <TextField style={styles.textField}
                                            hintText="E-Mail"
                                            floatingLabelText="Enter E-Mail"
                                            ref='email'
                                            
                                        /><br />
            
                                        <TextField style={styles.textField}
                                            hintText="Password Field"
                                            floatingLabelText="Password"
                                            type="password"
                                            ref='pass'
                                            
                                        /><br />

                                        <RaisedButton style={styles.button} label="SignIn" secondary={true}
                                        onClick={this.signIn.bind(this)}
                                         />
                                        <p className="error">
                                            {this.state.error.message}
                                        
                                        </p>
                                    

                             
                                        <Link to ={'./signUp'}>
                                        <p className="error">new user ? Sign up </p>
                                        </Link>
                                    </form>
                                </Paper>
                                
                            </div>
                </div>       
                        
        </div>
               
           
        )
        
        
        
    }
    
    
    
}
    
    
export default SignIn;