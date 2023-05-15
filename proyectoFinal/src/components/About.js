import React from 'react';
import aboutImg from '../img/main.jpg';
import {Link} from 'react-router-dom';

export default function About() {
    return (
        <div className="about">
           <div className="inside-container">
              <div className="about-center">
                 <div className="about-img">
                     <img src={aboutImg} alt=""/>
                 </div>

                 <div className="about-info">
                   <p>En construcción...</p>

                   <div className="but-options">
    <Link to='/products'><button className="back-products">productos</button></Link>
   
    </div>
                 </div>
                </div> 
            </div>  
        </div>
    )
}
