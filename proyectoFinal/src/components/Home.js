import React from 'react';
import backImg from '../img/main.jpg'
import Products from '../components/Products';

export default function Home(props) {
  
    return (
       <React.Fragment>
            <div className='header'>
           <div className="header-info">
               <h1>Restaurante<span className="header-main"> García </span></h1>
               <p>Las mejores enchiladas, en el mejor lugar.</p>
               
           </div>
        </div>

        <div className="products-home">
            <p>Productos</p>
            <Products />
        </div>
       </React.Fragment>
    )
}
