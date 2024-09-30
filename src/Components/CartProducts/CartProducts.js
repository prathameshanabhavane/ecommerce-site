import { Link } from 'react-router-dom';
import './CartProducts.scss';
import Ratings from '../Ratings/Ratings';

const CartProducts = ({product, removeProductFromCart, quantity, increaseQuantity, decreaseQuantity}) => {
    // console.log(product);
    const {id, title, image, price, rating, category} = product;

    return(
        <>  <div className='p-link'>
                <div className='cart-products'>
                    <Link to={`/product/${id}`}>
                        <figure>
                            <img src={image} alt={title} />
                        </figure>
                    </Link>
                    <div className='p-info'>
                        <h6>
                            {category}
                        </h6>
                        <h2>
                            {title}
                        </h2>
                        <h3>
                            ${price}
                        </h3>
                        <div className='ratings'>
                            <Ratings rating={rating} />
                            <span>({rating.count})</span>
                        </div>
                        <div className='product-quantity'>
                            <button className='quant-btn' onClick={() => decreaseQuantity(id)}>-</button>
                            <input type="text" value={quantity} readOnly />
                            <button className='quant-btn' onClick={() => increaseQuantity(id)}>+</button>
                        </div>
                    </div>
                </div>
                <button className='delete-icon' onClick={() => removeProductFromCart(product)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143" stroke="black" strokeWidth="1.56" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default CartProducts;