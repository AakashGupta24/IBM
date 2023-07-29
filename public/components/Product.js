import React from 'react'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Product = ({product :{
  imageUrl,name,price
}}) => {


  
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  }, [])
  console.log(imageUrl);
  return (
    <>
      <Link href={`/shop/${name}`}>
       <div className="" data-aos="fade-right">
        <img src={`${imageUrl}`} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
       </div>
      </Link>
    </>
  )
}

export default Product