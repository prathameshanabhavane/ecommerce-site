import { Link } from 'react-router-dom';
import './CartProducts.scss';
import Ratings from '../Ratings/Ratings';
import { AiTwotoneDelete } from "react-icons/ai";


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
                    <AiTwotoneDelete />
                </button>
            </div>
        </>
    )
}

export default CartProducts;