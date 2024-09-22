import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from '../../Components/Products/Products';
import { useState,  useEffect } from 'react';
import { useCart } from '../../Context/CartContext';

const Cart = () => {
    const [products, setProducts] = useState([])
    const { cart, dispatch } = useCart();

    // console.log('cartProduct', cart)

    const removeProductCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    return(
        <>
            <div className="home-page page">
                <Container>
                    <Row>
                        {cart.map(product => {
                            return(
                                <Col key={product.id} sm={6} md={4} lg={3}>
                                    <Products product={product} />
                                    <button onClick={() => removeProductCart(product)}>Remove</button>
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