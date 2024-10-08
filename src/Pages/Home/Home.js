import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss';
import Products from '../../Components/Products/Products';
import Categories from '../../Components/Categories/Categories';
import ServiceFatures from '../../Components/ServiceFeatures/ServiceFatures';
import Banner from "../../Components/Banner/Banner";
// import axios from 'axios';
import { useState,  useEffect } from 'react';
import { Link } from "react-router-dom";
import BaseComponent from "../../Components/BaseComponent/BaseComponent";

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8')
            .then(res=>res.json())
            .then(data=>setProducts(data) )
    }, [])

    const shimmerComponent = window.matchMedia("(max-width: 600px)").matches ? 
        <ShimmerSimpleGallery row={1} col={1} card imageHeight={300} caption /> : 
        <ShimmerSimpleGallery row={2} col={4} card imageHeight={300} caption /> ; 

    return(
        <>
            <div className="home-page page">
                <Banner />
                <Container>
                    <section className='category-section'>
                        <h2 className='section-title'>Browse By Category</h2>
                        <Row>
                            <Categories />
                        </Row>
                    </section>
                    <section className='latest-product'>
                        <h2 className='section-title'>Latest Products</h2>
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

export default Home;