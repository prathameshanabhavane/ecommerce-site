import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './OrderPlaced.scss';

const OrderPlaced = () => {
    return(
        <>
            <div className='order-placed-page page'>
                <section>
                    <Container>
                        <div className='success-message'>
                            <div className='bag-icon'>
                                <img src={`${process.env.PUBLIC_URL}/img/bag.gif`} alt="Success Bag" className='bag-gif' />
                            </div>
                            <h1>Your Order Has Been  Placed Successfully!!!</h1>
                        </div> 
                    </Container>
                </section>
            </div>
        </>
    )
}
export default OrderPlaced