import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";


export const Cart = () => {
  useTitle("Carrito");
  
  const products = [
    {id: 1, "name": "Chilaquiles rojos", "price": 65, "image": "/assets/images/fig001.jpg",}, 
    {id: 2, "name": "Enchiladas rojas", "price": 75, "image": "/assets/images/fig002.jpg",}, 
  ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}