import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from '../../Components/Products/Products';
import { useState,  useEffect } from 'react';

const Cart = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/user/3')
            .then(res=>res.json())
            .then(data=> data.map( product => {
                let productArray = product.products;

                productArray.map(ele => {
                    console.log(ele.productId)

                })
            }))

    }, [products])

    console.log(products);

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

export default Cart;