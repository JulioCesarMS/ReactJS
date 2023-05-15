import React, { Component } from 'react'
import {Data} from './Data';

const ProductContext = React.createContext();



 class ProductProvider extends Component {

state={
  navOpen:false,
  cartOpen:false,
  data:Data,
  cart:[],
  total:0,
  shipping:10
 

}

// open-close navbar
handleNav=()=>{

    if(this.state.cartOpen===true){
        this.setState({
           cartOpen:false
        })
     }

    this.setState({
        navOpen:!this.state.navOpen
    })
}

// open-close carrito
handleCartNav=()=>{
    
    if(this.state.navOpen===true){
        this.setState({
            navOpen:false
        })
     }
     

    this.setState({
        cartOpen:!this.state.cartOpen
    })
}

// si el carrito o el navbar están abiertos
closeNavCart=()=>{
  if(this.state.cartOpen==true || this.state.navOpen===true){
    this.setState({
        navOpen:false,
        cartOpen:false
    })
  }
 
}

addToCart=(id)=>{
    
// agregar al carrito
    console.log(`item ${id} added to cart`);
    const {data,cart}=this.state;
    
  let check= this.state.cart.find(item=>item.id===id);
   
    if(!check){
        const filterData=data.filter(item=>{
            return (item.id===id)
        });

        // for each 
     filterData.forEach(item=>{
         item.isInCart=true
     })
        this.setState({
            cart:[...this.state.cart, ...filterData],
            cartOpen:true,    
        },()=>{
            this.totalItems();
        })
    }
    else{
        // alert('existe item')
        this.setState({
        })
    }
}

// elimina item del carrito
deleteItem=(id)=>{

const {cart}=this.state;

// . forma correcta
cart.forEach((item, index)=>{
    if(item.id===id){
        cart.splice(index,1)
    }
    item.isInCart=false
})

this.setState({
    cart:cart,
  
},()=>{
    this.totalItems();
})

}


// incrementar item
increaseItem=(id)=>{
 const {cart}=this.state;
 cart.forEach(item=>{
     if(item.id===id){
      item.count +=1;
     }
 })

 this.setState({
     cart:cart
 },()=>{
     this.totalItems();
 })

}


// decrementar item
decreaseItem=(id)=>{
    const {cart}=this.state;
 
    cart.forEach(item=>{
        if(item.id===id){
          item.count===1?item.count=1:item.count -=1;
        }
    })

    this.setState({
        cart:cart
    },()=>{
        this.totalItems();
    })
   
   }

// obtener items totales en el carrito
totalItems=()=>{
 const {cart}=this.state;
 const cartTotal=cart.reduce((prev, item)=>{
     return prev + (item.price*item.count)
 },0)

this.setState({
    total:cartTotal
})

}

componentDidUpdate(){
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart));
    localStorage.setItem('totalCart', JSON.stringify(this.state.total));

    // localStorage

}

componentDidMount(){
    this.totalItems();

  const dataCart=JSON.parse(localStorage.getItem('dataCart'));

  if(dataCart !==null){
    this.setState({
     cart:dataCart,
     
    })
  }

  const totalCart =JSON.parse(localStorage.getItem('totalCart'));

  this.setState({
      total:totalCart
  })
}

    render() {
        return (
            <ProductContext.Provider value={{

             ...this.state,
             handleNav:this.handleNav,
             handleCartNav:this.handleCartNav,
             closeNavCart:this.closeNavCart,
             addToCart:this.addToCart,
             deleteItem:this.deleteItem,
             increaseItem:this.increaseItem,
             decreaseItem:this.decreaseItem

            }}>
               {this.props.children} 
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider}
