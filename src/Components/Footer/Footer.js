
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.scss'

const Footer  = () => {
    return(
        <>
            <footer className="app-footer">
                <Container>
                        <Row>
                            <Col className='f-gird' xl="12">
                                <h2>Footer</h2>
                            </Col>
                        </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;