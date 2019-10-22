import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Link ,
  NavLink
} from 'react-router-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blueGrey50, blueGrey800
        ,grey900,blueGrey500,blueGrey400,blueGrey600,blueGrey300,white,blueGrey100




} from 'material-ui/styles/colors';


import AppBar from 'material-ui/AppBar';
import logo from './img/logo.png';
import IconButton from 'material-ui/IconButton';


import Button from './components/button.js';
import SignUp from './components/signUp.js';
import SignIn from './components/signIn.js';
import Home from './components/home/home.js';
import BookingHut from './components/home/bookinghut.js';
import Owner from './components/owner/owner.js';
import User from './components/user/user.js';









const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    textColor: white,
    primary2Color: blueGrey800,
    primary3Color: blueGrey800,
    accent1Color: blueGrey500 ,
  //  accent1Color: pinkA200,
    accent2Color: blueGrey800,
     accent3Color: blueGrey800,
  //  
  //  alternateTextColor: white,
   // canvasColor: white,
   canvasColor: blueGrey100,
   borderColor: blueGrey800,
   
   // disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blueGrey600,
   // clockCircleColor: fade(darkBlack, 0.07),
  //  shadowColor: fullBlack,
  },
  appBar: {
    height: 50,
    border: '5px',

    borderColor: blueGrey800
    ,
    
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <div>
            <AppBar position="static"  title={<img src={logo}  alt="logo"/> } iconElementLeft={<IconButton  />}>
              <Route  path="/" component={Button}/> 
            </AppBar>
            
            
           
              <Route  path="/home" component={Home}/>
              <Route path="/signUp" component={SignUp} />
              <Route path="/signIn" component={SignIn} />
              <Route path="/owner" component={Owner}/>
              <Route path="/user" component={User}/>
              <Route path="/bookinghut/:name" component={BookingHut} />
            
              
              
              
          
            
              
            
  
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
