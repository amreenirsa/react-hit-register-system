import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


        





        
class Services extends Component  {
render() {
    return (   
        
    <div>
                       
       

                       
                       <div id="services" className="container-fluid text-center">
                         <h2>SERVICES</h2>
                         <h4>What we offer</h4>
                         <br/>
                         <div className="row slideanim">
                           <div className="col-sm-4">
                             <span className="glyphicon glyphicon-camera logo-small"></span>
                             <h4>Proffesional Photography</h4>
                             <p>Lorem ipsum dolor sit amet..</p>
                           </div>
                           <div className="col-sm-4">
                             <span className="glyphicon glyphicon-fire logo-small"></span>
                             
                             <h4>Live Fresh BBQ</h4>
                             <p>Lorem ipsum dolor sit amet..</p>
                           </div>
                           <div className="col-sm-4">
                             <span className="glyphicon glyphicon-music logo-small"></span>
                             <h4>Beach Events</h4>
                             <p>Lorem ipsum dolor sit amet..</p>
                           </div>
                         </div>
                         <br/><br/>
                         <div className="row slideanim">
                           <div className="col-sm-4">
                             <span className="glyphicon glyphicon-screenshot logo-small"></span>
                             <h4>Water Sports</h4>
                             <p>Lorem ipsum dolor sit amet..</p>
                           </div>
                           <div className="col-sm-4">
                             <span className="glyphicon glyphicon-star-empty logo-small"></span>
                             <h4>Beach Games</h4>
                             <p>Lorem ipsum dolor sit amet..</p>
                           </div>
                           <div className="col-sm-4">
                             <span className="glyphicon glyphicon-tint logo-small"></span>
                             <h4 >Underwater Snorkeling</h4>
                             <p>Lorem ipsum dolor sit amet..</p>
                           </div>
                         </div>
                       </div>

    </div>
              
    )
                               
}}
          
          
export default Services;