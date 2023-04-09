import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Chilaquiles rojos", "price": 65, "image": "../assets/images/fig001.jpg"},
    {"id": 2, "name": "Enchiladas rojas", "price": 75, "image": "../assets/images/fig002.jpg"},
    {"id": 3, "name": "Enchiladas con mole", "price": 70, "image": "../assets/images/fig003.jpg"},
    {"id": 4, "name": "Enchiladas verdes", "price": 65, "image": "../assets/images/fig004.jpg"},
    {"id": 5, "name": "Enchiladas en pipian", "price": 65, "image": "../assets/images/fig005.jpg"},
    {"id": 6, "name": "Enchiladas con queso", "price": 65, "image": "../assets/images/fig006.jpg"},
    {"id": 7, "name": "Enchiladas mineras", "price": 60, "image": "../assets/images/fig007.jpg"},
    {"id": 8, "name": "Enchiladas potosinas", "price": 60, "image": "../assets/images/fig008.jpg"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}