import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ProductList.scss';
import Products from '../../Components/Products/Products';
import { useState,  useEffect } from 'react';
import BaseComponent from "../../Components/BaseComponent/BaseComponent";


const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data) )
    }, [])

    const shimmerComponent = window.matchMedia("(max-width: 600px)").matches ? 
        <ShimmerSimpleGallery row={1} col={1} card imageHeight={300} caption /> : 
        <ShimmerSimpleGallery row={2} col={4} card imageHeight={300} caption /> ;

    return(
        <>
            <div className="product-page page">
                <Container>
                    <section className='pg-product'>
                        <Row>
                            
                            { products.length == 0 ? 
                            shimmerComponent : 
                            products.map(product => {
                                return(
                                    <Col key={product.id} sm={6} md={4} lg={3}>
                                        <Products product={product} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </section>
                    <BaseComponent />
                </Container>
            </div>
        </>
    )
}

export default ProductList;