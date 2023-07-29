"use client"
import React from 'react';
import { Header } from '@/public/components';
import './page.css'; // Import the CSS file for styling
import Link from 'next/link';
import Product from '@/public/components/Product';
const ShoppingPage = () => {
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

  return (
    
    // <>
    <div className="shopping-page">
      <Header/>
      <div className="shopping-items">
        {shoppingItems.map(item => (
          <div key={item.id} className="shopping-item" >
            <Product product={item} />
          </div>
        ))}
      </div>
    </div>
    // </>
  );
};

export default ShoppingPage;
