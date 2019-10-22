import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


        





        
class Aboutsus extends Component  {
render() {
    return (   
        
    <div>
                       
       

        <div id="about" className="container-fluid">
            <div className="row">
                <div className="col-sm-8">
                <h2>About Company Page</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               
                <button className="btn btn-default btn-lg">Get in Touch</button>
                </div>
                <div className="col-sm-4">
                <span className="glyphicon glyphicon-signal logo"></span>
                </div>
            </div>
        </div>

    </div>
              
    )
                               
}}
          
          
export default Aboutsus;