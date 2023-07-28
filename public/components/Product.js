import React from 'react'
import Link from 'next/link'

const Product = ({product :{
  imageUrl,name,price
}}) => {
  console.log('sjgsjsj');
  return (
    <>
      <Link href={`/shop/${name}`}>
       <div className="">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
       </div>
      </Link>
    </>
  )
}

export default Product