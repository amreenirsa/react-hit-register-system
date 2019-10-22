import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Aboutsus from './aboutsus.js';
import Slider from './slider.js';
import Services from './services.js';
//import OurHuts from './ourhuts.js';
import Testimonial from './testimonial.js';
import AllRegisteredHut from './allregisteredhut';
import BookingHut from './bookinghut';

        





        
class Home extends Component {
    
      
    
    

          
render() {
    return ( 
       
       
            <div>

           <Slider/>
           <Aboutsus/>
          {/*<OurHuts/>*/} 
           <AllRegisteredHut/>
            
           <Services/>
           <Testimonial/>
           </div> 
           
              
              
    )
                               
}}
          
          
export default Home;