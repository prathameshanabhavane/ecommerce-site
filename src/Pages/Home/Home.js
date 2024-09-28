import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss';
import Products from '../../Components/Products/Products';
import Categories from '../../Components/Categories/Categories';
import ServiceFatures from '../../Components/ServiceFeatures/ServiceFatures';
// import axios from 'axios';
import { useState,  useEffect } from 'react';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data) )
    }, [])

    return(
        <>
            <div className="home-page page">
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
                            {products.map(product => {
                                return(
                                    <Col key={product.id} sm={6} md={4} lg={3}>
                                        <Products product={product} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </section>
                    <section className='services-section'>
                        <Row>
                            <ServiceFatures />
                        </Row>
                    </section>
                </Container>
            </div>
        </>
    )
}

export default Home;