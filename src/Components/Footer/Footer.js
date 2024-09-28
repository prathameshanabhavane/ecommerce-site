
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer  = () => {
    return(
        <>
            <footer className="app-footer">
                <Container>
                        <div className='footer-wrap'>
                            <div className='f-logo f-grid'>
                                <Link>Footer Logo</Link>
                            </div>
                            <div className='f-grid'>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <Link>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Terms of Services
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='f-grid social'>
                                <h3>
                                    Social Link
                                </h3>
                                <ul>
                                    <li>
                                        <a href="#">facebook</a>
                                    </li>
                                    <li>
                                        <a href="#">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </Container>
                <div className='copyrights'>
                    Copyright 2024. All right reserved
                </div>
            </footer>
        </>
    )
}

export default Footer;