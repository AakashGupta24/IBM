import React from 'react';
import { Header } from '@/public/components';
import './page.css'; // Import the CSS file for styling
import Link from 'next/link';
import Product from '@/public/components/Product';
const ShoppingPage = () => {
  const shoppingItems = [
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

  return (
    // <>
    <div className="shopping-page">
      <Header/>
      <div className="shopping-items">
        {shoppingItems.map(item => (
          <div key={item.id} className="shopping-item">
            <Product product={item}/>
          </div>
        ))}
      </div>
    </div>
    // </>
  );
};

export default ShoppingPage;
