import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CheckoutDetail.scss'
import { useForm, SubmitHandler } from "react-hook-form"
import { useCart } from '../../Context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';

const CheckoutDetail = () => {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const { cart, dispatch } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const { bagTotal, discount, orderTotal } = location.state || {};

    // console.log('location', location.state)

    return(
        <>
            <div className="checkout-detail-page page">
                <Container>
                    <Row>
                        <Col sm={12} md={7} lg={7}>
                            <h2 className='section-title'>Delivery Details</h2>
                            <div className="form-detail">
                                <form onSubmit={handleSubmit((data, e) => {
                                        console.log(data)
                                        e.target.reset()
                                        console.log(cart);
                                        console.log({ bagTotal: bagTotal, discount: discount, orderTotal:orderTotal  })
                                        dispatch({ type: 'CLEAR_CART' });
                                        navigate('/order-placed');
                                    })}>
                                    <div className="input-field">
                                        <input type="text" {...register("name", {required:"Name field is required"})} placeholder="Name" />
                                        <span className='error'>{errors.name?.message}</span>
                                    </div>
                                    <div className="input-field">
                                        <input type="email" {...register("email", {required:"Email field is required"})} placeholder="Email" />
                                        <span className='error'>{errors.email?.message}</span>
                                    </div>
                                    <div className="input-field">
                                        <input type="text"{...register("phone", {required:"Phone field is required"})} placeholder="Phone" />
                                        <span className='error'>{errors.phone?.message}</span>
                                    </div>
                                    <div className="input-field">
                                        <textarea placeholder="Address" {...register("address", {required:"Address field is required"})}></textarea>
                                        <span className='error'>{errors.address?.message}</span>
                                    </div>
                                    <div className="input-field">
                                        <input type="submit" value="Submit" className='submit' />
                                    </div>
                                </form>
                            </div>
                        </Col>
                       
                        <Col sm={12} md={5} lg={5}>
                            <div className='order-details'>
                                <h2>Order Summary</h2>
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CheckoutDetail;