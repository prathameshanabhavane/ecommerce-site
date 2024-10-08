
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer  = () => {
    return(
        <>
            <footer className="app-footer">
                <Container>
                        <div className='footer-wrap'>
                            <div className='f-logo f-grid'>
                                <Link>Dukan</Link>
                            </div>
                            <div className='f-grid'>
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <Link to="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/terms-of-services">
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
                            <div className='f-grid s-address'>
                                <h3>Support</h3>
                                <ul>
                                    <li>
                                        1234 Placeholder Street
                                        Suite 567
                                        Faketown, CA 98765
                                        USA
                                    </li>
                                    <li>
                                        (123) 456-7890
                                    </li>
                                    <li>
                                        contact@example.com
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