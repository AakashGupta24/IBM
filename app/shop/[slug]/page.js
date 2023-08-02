"use client"
import React from 'react';
import { useState, useEffect,useRef } from 'react';
import './page.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Product from '@/public/components/Product';
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import StarRating from '@/public/components/StarRating';
import { Header } from '@/public/components';

  const onAdd = (product, qty) => {
    // ... (existing code)

    // Add the animation class when the "Add to Cart" button is clicked
    setImageInCart(true);
    setTimeout(() => setImageInCart(false), 1000); // Reset the animation after 1 second
  };
const Page = ({ params }) => {
  const [product, setProduct] = useState([])
  const products = [
    { id: 1, name: 'Product1', price: '$19.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554617/ibm/saree4_c0ldml.jpg', category: "maharashtra" },
    { id: 2, name: 'Product2', price: '$29.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554617/ibm/saree4_c0ldml.jpg', category: "rajasthan" },
    { id: 3, name: 'Product3', price: '$29.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554617/ibm/saree3_cggg0a.jpg', category: "maharashtra" },
    { id: 4, name: 'Product4', price: '$29.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554616/ibm/saree2_zutt5m.jpg', category: "up" },
    { id: 5, name: 'Product5', price: '$29.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554576/ibm/saree1_ickepk.jpg', category: "maharashtra" },
    { id: 6, name: 'Product6', price: '$29.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554616/ibm/saree2_zutt5m.jpg', category: "rajasthan" },
    { id: 7, name: 'Product7', price: '$29.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554617/ibm/saree3_cggg0a.jpg', category: "up" },
    { id: 8, name: 'Product8', price: '$29.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554576/ibm/saree1_ickepk.jpg', category: "up" },
  ];

  useEffect(() => {

    const name = params.slug; // Replace this with the name of the product you want to match
    const item = products.find((item) => item.name === name);
    setProduct(item)
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, [])
  // Ref for the animated image
  const animatedImageRef = useRef(null);
  // State to keep track of the product quantity in the cart
  const [quantity, setQuantity] = useState(0);
  // State to keep track of the image animation
  const [isImageInCart, setImageInCart] = useState(false);
  const onAdd = (product, qty) => {
    // ... (existing onAdd logic)

    // Add the animation class when the "Add to Cart" button is clicked
    setImageInCart(true);
    setTimeout(() => {
      setImageInCart(false);
      // Reset the animated image position after the animation
      if (animatedImageRef.current) {
        animatedImageRef.current.style.transform = 'none';
      }
    }, 1000);
    setQuantity((prev)=> prev + 1) // Reset the animation after 1 second
  };
  return (
<>
<Header/>
    <div>
      <div className="product-detail-container">
        <div>
          <div className="shopping-cart " data-product-count={quantity}>
            <span className="cart-icon">&#128722;</span>
          </div>
          <div className="image-container">
            <img src={product.imageUrl} className="product-detail-image" />
            {isImageInCart && (
              <img
                ref={animatedImageRef}
                src={product.imageUrl}
                className={`product-detail-image image-into-cart-animation`}
              />
            )}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>

          <p className="price">${product.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" ><AiOutlineMinus /></span>
              <span className="num">5</span>
              <span className="plus" ><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
          <button type="button" className="add-to-cart" onClick={() => onAdd(product, quantity)}>
            Add to Cart
          </button>
            <button type="button" className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper shopping-page">
        <h2>You may also like</h2>
        <div className="marquee shopping-items">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <div key={item.id} className="shopping-item" >
                <Product product={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default Page;


