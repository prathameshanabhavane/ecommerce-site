
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './Header.scss';

const Header  = () => {
    return(
        <>
            <header className="app-header">
                    <div className='container'>
                        <div className='header-wrapper'>
                            <h1>Ecommerce</h1>
                            <div className='menu-wrap'>
                                <nav>
                                    <ul className='menu-list'>
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/products">Products</Link>
                                        </li>
                                        <li>
                                            <Link to="/cart">Cart</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <ul className='icon-list'>
                                    <li>
                                        <CiShoppingCart />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </header>
        </>
    )
}

export default Header;