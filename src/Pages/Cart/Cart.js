import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartProducts from '../../Components/CartProducts/CartProducts';
import { useState,  useEffect } from 'react';
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.scss';

const Cart = () => {
    const [products, setProducts] = useState([])
    const [bagTotal, setBagTotal] = useState(0);
    const { cart, dispatch } = useCart();
    const [discount, setDiscount] = useState(5);
    const [orderTotal, setOrderTotal] = useState(0);
    const [quantity, setQuantity] = useState(1);

    console.log('cartProduct', cart)

    useEffect(() => {
        const getBagTotal = cart.reduce((acc, cart) => {
            let getTotal = acc += cart.price;
            let getFinalTotal = getTotal * cart.quantity;
            return getFinalTotal;
        }, 0)
        setBagTotal(getBagTotal);
    }, [cart])

    useEffect(() => {
        const getOrderTotal = bagTotal - discount;
        setOrderTotal(getOrderTotal);
    }, [bagTotal])

    console.log('getBagTotal', bagTotal);

    const removeProductFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    const increaseQuantity = (id) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: { id } });
    }

    const decreaseQuantity = (id) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: { id } });
    }

    if(cart.length == 0) {
        return(
            <>
                <div className='cart-empty'>
                    <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" />
                    <h1>Your Shopping Bag is Empty!!</h1>
                    <Link to="/">Continue Shopping</Link>
                </div>
            </>
        )
    }

    return(
        <>
            <div className="cart-page page">
                <Container>
                    <Row>
                        <Col sm={12} md={8} lg={8}>
                            {cart.map(product => {
                                    return(
                                        <CartProducts 
                                            key={product.id} 
                                            product={product} 
                                            removeProductFromCart={removeProductFromCart} 
                                            quantity={product.quantity}
                                            increaseQuantity={increaseQuantity} 
                                            decreaseQuantity={decreaseQuantity}
                                        />
                                    )
                                })}
                            </Col>
                       
                        <Col sm={12} md={4} lg={4}>
                            <div className='order-details'>
                                <h2>Order Details</h2>
                                <ul>
                                    <li>
                                        <h6>Bag total</h6>
                                        <h6>${bagTotal}</h6>
                                    </li>
                                    <li className='discount'>
                                        <h6>Discount</h6>
                                        <h6>-${discount}</h6>
                                    </li>
                                    <li className='delivery-fee'>
                                        <h6>Delivery Fee</h6>
                                        <h6>Free</h6>
                                    </li>
                                    <li>
                                        <h6>Order Total</h6>
                                        <h6>${orderTotal}</h6>
                                    </li>
                                </ul>
                                <Link to="/checkout-detail">
                                    <button className='checkout'>
                                        Proceed to Checkout
                                    </button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Cart;