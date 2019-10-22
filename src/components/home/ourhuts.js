import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import paris from './img/paris.jpg';
import newyork from './img/newyork.jpg';
import sanfran from './img/sanfran.jpg';
import AllRegisteredHut from '../user/allregisteredhut';



        





        
class OurHuts extends Component  {
render() {
    return (   
        
    <div>
               <h2>Our Huts</h2><br/>        
               {/*     <div id="portfolio" className="container-fluid text-center bg-grey">
                            <h2>Our Huts</h2><br/>
                            
                            <div className="row text-center slideanim">
                                <div className="col-sm-4">
                                <div className="thumbnail">
                                    
                                    <img src={paris}  alt="New York"/>
                                    <h2>hut name: hut1 </h2>
                                    <p><span><strong>detail:</strong>  </span>
                                        3 Bed Rooms with 4 tiled bath, Double Lounge,Double story building,Dinning Area, 
                                        Well-furnished, Excellent Sandy Beach, Separate Shower Area, Private Parking,Covered 
                                        Tarrace,American kitchen with Gas Cylinder. Generator (Petrol u need to bring)
                                        Rates are for 10hrs and Groups of upto 25 peoples Only. Call us to confirm rates
                                         for Larger Group Size.</p>
                                         <p><span><strong>location: </strong>xxxxxxxxx</span></p>
                                         <p> <span><strong>price: </strong>xxxxxxxxxxxxxxxxxxxxxx</span></p>
                                            
                                            
                                </div>            
                                </div>
                                <div className="col-sm-4">
                                <div className="thumbnail">
                                 <img src={newyork}  alt="New York"/>
                                 <h2>hut name: hut2 </h2>
                                 <p><span><strong>detail:</strong>  </span>
                                     3 Bed Rooms with 4 tiled bath, Double Lounge,Double story building,Dinning Area, 
                                     Well-furnished, Excellent Sandy Beach, Separate Shower Area, Private Parking,Covered 
                                     Tarrace,American kitchen with Gas Cylinder. Generator (Petrol u need to bring)
                                     Rates are for 10hrs and Groups of upto 25 peoples Only. Call us to confirm rates
                                      for Larger Group Size.</p>
                                     
                                      <p><span><strong>location: </strong>xxxxxxxxx</span></p>
                                      <p><span><strong>price: </strong>xxxxxxxxxxxxxxxxxxxxxx</span></p>
                                        
                                      
                                </div>
                                </div>
                                <div className="col-sm-4">
                                <div className="thumbnail">
                                     <img src={sanfran}  alt="New York"/>
                                    
                                     <h2>hut name: hut3 </h2>
                                     <p>
                                         <span><strong>detail:</strong>  </span>
                                         3 Bed Rooms with 4 tiled bath, Double Lounge,Double story building,Dinning Area, 
                                         Well-furnished, Excellent Sandy Beach, Separate Shower Area, Private Parking,Covered 
                                         Tarrace,American kitchen with Gas Cylinder. Generator (Petrol u need to bring)
                                         Rates are for 10hrs and Groups of upto 25 peoples Only. Call us to confirm rates
                                          for Larger Group Size.</p>
                                       
                                             <p><span><strong>location: </strong>xxxxxxxxx</span></p>
                                             <p><span><strong>price: </strong>xxxxxxxxxxxxxxxxxxxxxx</span></p>
                                             
                                             
                                         <AllRegisteredHut/>
                                </div>
                                </div>
                    </div><br/>
    </div>*/}
    <AllRegisteredHut/>
    </div>
              
    )
                               
}}
          
          
export default OurHuts;