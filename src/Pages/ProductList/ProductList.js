import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProductList.scss';
import Products from '../../Components/Products/Products';
import Categories from '../../Components/Categories/Categories';
import ServiceFatures from '../../Components/ServiceFeatures/ServiceFatures';
import { useState,  useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data) )
    }, [])

    return(
        <>
            <div className="product-page page">
                <Container>
                    <section className='latest-product'>
                        <Row>
                            
                            { products.length == 0 ? 
                            <ShimmerSimpleGallery row={2} col={4} card imageHeight={300} caption /> : 
                            products.map(product => {
                                return(
                                    <Col key={product.id} sm={6} md={4} lg={3}>
                                        <Products product={product} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </section>
                </Container>
            </div>
        </>
    )
}

export default ProductList;