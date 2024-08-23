import React, { useCallback, useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState([]);
  const [query, setQuery] =useSearchParams();

  const getProducts = useCallback(async () => {
    let searchQuery = query.get('q') || "";
    const url = `https://my-json-server.typicode.com/JeongChan2/chan-hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    
  },[query]);

  useEffect(() => {
    getProducts();
  }, [getProducts])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}><ProductCard item={menu}/></Col>
          ))}

        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll