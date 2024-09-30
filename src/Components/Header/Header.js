
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './Header.scss';
import { useCart } from '../../Context/CartContext';
import Search from '../Search/Search';
import { useState } from 'react';

const Header  = () => {
    const {cart, dispatch } = useCart();
    const [searchToggle, setSearchToggle] = useState(false);

    // console.log('Header', cart.length)

    const handleSearchToggle = () => {
        console.log('search')
        setSearchToggle(!searchToggle)
    }

    return(
        <>
            <header className="app-header">
                    <div className='container'>
                        <div className='header-wrapper'>
                            <h1><Link to="/">Dukan</Link></h1>
                            <div className={`search-wrapp ${searchToggle ? 'search-active' : ''}`}>
                                <Search /> 
                            </div>
                            <div className="menu-wrap">
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
                                       <Link to="/cart">
                                            <span>
                                                <CiShoppingCart />
                                                <span className='badge'>{cart.length} </span>
                                            </span>
                                       </Link>
                                    </li>
                                    <li className='search-icon-li'>
                                        <span onClick={handleSearchToggle}>
                                            {!searchToggle && (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                                </svg>
                                            ) }
                                            {searchToggle && (
                                                <svg fill="#000000" width="24" height="22" viewBox="0 0 24 24" id="cross" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color cross-icon"><line id="primary" x1="19" y1="19" x2="5" y2="5" ></line><line id="primary-2" data-name="primary" x1="19" y1="5" x2="5" y2="19"></line></svg>
                                            )}
                                        </span>
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