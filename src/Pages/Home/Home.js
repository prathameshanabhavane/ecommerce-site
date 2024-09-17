import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.scss';
import Products from '../../Components/Products/Products';
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
                    <Row>
                        {products.map(product => {
                            return(
                                <Col key={product.id} sm={6} md={4} lg={3}>
                                    <Products product={product} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home;