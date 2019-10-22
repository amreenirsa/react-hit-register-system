import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import * as firebase from 'firebase';
import paris from './img/paris.jpg';
import newyork from './img/newyork.jpg';
import sanfran from './img/sanfran.jpg';


        





        
class AllRegisteredHut extends Component  {

    constructor() {
        super();
            this.state = {
                huts: [],
                hutKeys:[],
                
                
            }
        }
        componentDidMount() {
       
            
                firebase.database().ref('huts').orderByChild('uid').on('value', snap => {
                    var obj = snap.val();
                    let keys = [];
                    let huts = [];
                    let hutKeys=[];
                    for (let key in obj) {
                        keys.push(key);
                        huts.push(obj[key]);
                        hutKeys.push(key)
                    }
                    
                    this.setState({ huts, keys , hutKeys })
                    // console.log(this.state.huts);
                })
                
            
        
        
    } 
        
        
render() {
    return (   
        
    <div>
        
        <div id="portfolio"  className="container-fluid text-center bg-grey">
            <div className="row text-center slideanim">
                                {this.state.huts.map((hut,index)=>(
                                
                                        <div className="col-sm-4" key={index}>
                                                <div className="thumbnail">
                                                            <img src={paris}  alt="New York"/>
                                                            <h2><strong> hut name: </strong>   {hut.hutname} </h2>
                                                            <p>
                                                                <span><strong>detail:</strong> {hut.detail}  </span>
                                                                
                                                            </p>
                                                           
                                                                <p><span><strong>location: </strong>{hut.location} </span></p>
                                                                <p><span><strong>price: </strong>{hut.price}</span></p>
                                                                
                                                           
                                                </div>   
                                        </div>    ))}
            </div>                                                  
        </div>
    </div>
              
    )
                               
}}
          
          
export default AllRegisteredHut;