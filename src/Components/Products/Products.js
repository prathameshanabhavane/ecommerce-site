import { Link } from 'react-router-dom';
import './Products.scss';
import Ratings from '../Ratings/Ratings';

const Products = ({product}) => {
    const {id, title, image, price, rating, category, description} = product;
    console.log(product);

    return(
        <>
            <Link className='p-link' to={`/product/${id}`}>
                <div className='products'>
                    <figure>
                        <img src={image} alt={title} />
                    </figure>
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
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Products;