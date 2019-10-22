import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import hut1 from './img/hut1.jpg';
import hut2 from './img/hut2.jpg';
import hut3 from './img/hut3.jpg';


        





        
class Slider extends Component  {
render() {
    return (   
        
    <div>
         
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            
            <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    
                    <img src={hut1}  alt="New York"/>
                <div className="carousel-caption">
                <h3>hut1</h3>
                <p>TLorem ipsum dolor sit amet TLorem ipsum dolor sit ametTLorem ipsum dolor sit ametTLorem ipsum dolor sit ametTLorem ipsum dolor sit amet.</p>
                </div>      
            </div>

            <div className="item">
                
                <img src={hut2}  alt="New York"/>
                <div className="carousel-caption">
                <h3>hut2</h3>
                <p>TLorem ipsum dolor sit amet.</p>
                </div>      
            </div>
            
            <div className="item">
                
                <img src={hut3}  alt="New York"/>
                <div className="carousel-caption">
                <h3>hut3</h3>
                <p>Lorem ipsum dolor sit amet!</p>
                </div>      
            </div>
            </div>

        
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>

    </div>
              
    )
                               
}}
          
          
export default Slider;