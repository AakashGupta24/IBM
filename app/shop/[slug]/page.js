"use client"
import React from 'react';
import { useState ,useEffect} from 'react';
import './page.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StarRating from '@/public/components/StarRating';
const Page = ({ params }) => {
  const [product, setProduct] = useState([])
  const products = [
    { id: 1, name: 'Product1', price: '$19.99', imageUrl:"../assets/saree1.jpg" },
    { id: 2, name: 'Product2', price: '$29.99', imageUrl: '../assets/saree2.jpg' },
    { id: 3, name: 'Product2', price: '$29.99', imageUrl: '../assets/saree2.jpg' },
    { id: 4, name: 'Product2', price: '$29.99', imageUrl: '../assets/saree2.jpg' },
    { id: 5, name: 'Product2', price: '$29.99', imageUrl: '../assets/saree2.jpg' },
    { id: 6, name: 'Product2', price: '$29.99', imageUrl: '../assets/saree2.jpg' },
    { id: 7, name: 'Product2', price: '$29.99', imageUrl: '../assets/saree2.jpg' },
    { id: 8, name: 'Product2', price: '$29.99', imageUrl: '../assets/saree2.jpg' },
    // Add more sample shopping items here      
  ];
  useEffect(() => {
    
    const name = params.slug; // Replace this with the name of the product you want to match
  
    // Find the product in the data based on the name
    const item = products.find((item) => item.name === name);
    setProduct(item)
    console.log(item);

    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, [])
  
  // State to keep track of the product quantity in the cart
  const [quantity, setQuantity] = useState(0);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle removing the product from the cart
  const handleRemoveFromCart = () => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity - 1));
  };

  return (
    <div className="product-page">
      <div className="product-info">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">Price: {product.price}</p>
          <StarRating rating={product.rating} />
        </div>
      </div>
      <div className="cart-actions">
        <button onClick={handleRemoveFromCart} className="action-button">
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button onClick={handleAddToCart} className="action-button">
          +
        </button>
        <img src="../assets/cart.png" alt="Cart" className="cart-image" />
      </div>
    </div>
  );
};

export default Page;


export async function getServerSideProps({params}) {
  console.log(params.slug,"hkhkkhkbknknk");
  const products = [
    { id: 1, name: 'Product1', price: '$19.99', imageUrl:'assets/saree1.jpg' },
    { id: 2, name: 'Product2', price: '$29.99', imageUrl: 'assets/saree2.jpg' },
    { id: 3, name: 'Product2', price: '$29.99', imageUrl: 'assets/saree2.jpg' },
    { id: 4, name: 'Product2', price: '$29.99', imageUrl: 'assets/saree2.jpg' },
    { id: 5, name: 'Product2', price: '$29.99', imageUrl: 'assets/saree2.jpg' },
    { id: 6, name: 'Product2', price: '$29.99', imageUrl: 'assets/saree2.jpg' },
    { id: 7, name: 'Product2', price: '$29.99', imageUrl: 'assets/saree2.jpg' },
    { id: 8, name: 'Product2', price: '$29.99', imageUrl: 'assets/saree2.jpg' },
    // Add more sample shopping items here
  ];
  const name = params.slug; // Replace this with the name of the product you want to match

  // Find the product in the data based on the name
  const product = products.find((item) => item.name === name);
  return {
    props: {
      product: product || null,
    },
  };
}
