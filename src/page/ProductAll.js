import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default ProductAll