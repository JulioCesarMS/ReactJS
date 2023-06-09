import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context';
import {creaProductos} from '../firebase/firebase.js';
import Cart from './Cart';
import logo from '../img/logo.jpg'


export default function Navbar() {
    //creaProductos()
    return (
<ProductConsumer>
    {value=>{
        const{handleNav,navOpen,cartOpen, handleCartNav,closeNavCart,cart}=value;

    return(
    <div className="container sticky">
    
    <nav className="sticky">
        <div className="logo-btn">
            
            <Link to="/" onClick={closeNavCart}><img src={logo} alt=""/> Restaurante  <span className="main"> García </span></Link>

            <div className="cart hide" onClick={handleCartNav} > <i className="fas fa-shopping-cart"></i>
    <span>{cart.length}</span>
            </div>

            <div className="btn" onClick={handleNav}>
            <i className="fas fa-bars"></i> 
            </div>
        </div>

        <div className="dra">
         <div className="drawers">
           <ul  className={navOpen?"newLinks links":" links"} onClick={closeNavCart} >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/products">Productos</Link></li>
            {/* <li><Link to="/" onClick={handleCartNav} >Cart <i className="fas fa-shopping-cart cart"><span >0</span></i></Link></li> */}
          </ul>
     
      
      <Cart value={value} />
            
         </div>
    <span className="carta"  onClick={handleCartNav}>Carrito <i className="fas fa-shopping-cart cart"><span >{cart.length}</span></i></span>
        
        </div>
        
    </nav>
    </div>
    )
    }}
</ProductConsumer>
    )
}
