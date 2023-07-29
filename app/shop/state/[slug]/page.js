"use client"
import React from 'react'
import Product from '@/public/components/Product';
import { useEffect,useState } from 'react';
import { Header } from '@/public/components';
import './page.css';
const Statepage = ({params}) => {
    // console.log(params.slug);
    const [products, setProducts] = useState([])
    useEffect(() => {
    
        const name = params.slug; // Replace this with the name of the product you want to match
        const shoppingItems = [
            { id: 1, name: 'Product1', price: '$19.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554617/ibm/saree4_c0ldml.jpg' ,category:"maharashtra"},
            { id: 2, name: 'Product2', price: '$29.99', imageUrl: 'https://res.cloudinary.com/dplyi070y/image/upload/v1690554617/ibm/saree4_c0ldml.jpg',category:"rajasthan" },
            { id: 3, name: 'Product3', price: '$29.99', imageUrl:  'https://res.cloudinary.com/dplyi070y/image/upload/v1690554617/ibm/saree3_cggg0a.jpg' ,category:"maharashtra"},
            { id: 4, name: 'Product4', price: '$29.99', imageUrl:  'https://res.cloudinary.com/dplyi070y/image/upload/v1690554616/ibm/saree2_zutt5m.jpg' ,category:"up"},
            { id: 5, name: 'Product5', price: '$29.99', imageUrl:  'https://res.cloudinary.com/dplyi070y/image/upload/v1690554576/ibm/saree1_ickepk.jpg',category:"maharashtra" },
            { id: 6, name: 'Product6', price: '$29.99', imageUrl:  'https://res.cloudinary.com/dplyi070y/image/upload/v1690554616/ibm/saree2_zutt5m.jpg',category:"rajasthan" },
            { id: 7, name: 'Product7', price: '$29.99', imageUrl:  'https://res.cloudinary.com/dplyi070y/image/upload/v1690554617/ibm/saree3_cggg0a.jpg' ,category:"up"},
            { id: 8, name: 'Product8', price: '$29.99', imageUrl:  'https://res.cloudinary.com/dplyi070y/image/upload/v1690554576/ibm/saree1_ickepk.jpg' ,category:"up"},
            // Add more sample shopping items here
          ];
        // Find the product in the data based on the name
        const item = shoppingItems.filter((item) => item.category === name);
        setProducts(item)
        console.log(item);
    
       
      }, [])
  return (
    <div>
         <div className="shopping-page">
      <Header/>
      <div className="shopping-items">
        {products.map(item => (
          <div key={item.id} className="shopping-item" >
            <Product product={item} />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Statepage