import React, { useCallback, useEffect } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productSlice';

const ProductAll = () => {

  const productList = useSelector((state) => state.product.productList);
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] =useSearchParams();

  const dispatch = useDispatch();

  const getProducts = useCallback(() => {
    let searchQuery = query.get('q') || "";
    dispatch(fetchProducts(searchQuery))
  }, [query, dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col lg={3} key={index}><ProductCard item={menu}/></Col>
          ))}

        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll