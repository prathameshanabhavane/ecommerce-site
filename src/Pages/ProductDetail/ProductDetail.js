import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProductDetail.scss';
import { useCart } from '../../Context/CartContext';
import Products from '../../Components/Products/Products';
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import Ratings from '../../Components/Ratings/Ratings';
import BaseComponent from '../../Components/BaseComponent/BaseComponent';

const ProductDetail = () => {
    let { id } = useParams();
    const [productDeatil, setProductDeatil] = useState([])
    const [relatedCategoryProducts, setRelatedCategoryProducts] = useState([])
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useCart();

    // console.log('useCart', dispatch)

    // console.log(navigate);

    const { title, image, price, rating, category, description} = productDeatil;


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(data=>setProductDeatil(data))
            .catch(err =>setError(err))
    }, [id])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`)
        .then(res=>res.json())
        .then(data=>setRelatedCategoryProducts(data))
    }, [category])

    // const addToCart = (id, product) => {
    //     console.log('cart', id);
    //     console.log(product);
    //     const jsonProduct = JSON.stringify(product)
    //     localStorage.setItem('cartProduct', jsonProduct)
    // }

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: productDeatil });
        navigate('/cart'); // Redirect to cart
    };

    // console.log(productDeatil);

    const shimmerComponent = window.matchMedia("(max-width: 600px)").matches ? 
        <ShimmerSimpleGallery row={4} col={1} card imageHeight={300} caption /> : 
        <ShimmerSimpleGallery row={1} col={4} card imageHeight={300} caption /> ;

    return(
        <>  
            {error != '' && (
                <div className='not-found'>
                    <h2>
                        Data Not Found
                    </h2>
                </div>
            )}
            {productDeatil.length != 0 && (
                <div className="product-deatil page">
                    <Container>
                        <div className='products product-deatils'>
                            <figure>
                                <img src={image} alt={title} />
                            </figure>
                            <div className='p-info'>
                                <h2>
                                    {title}
                                </h2>
                                <p>
                                    {description}
                                </p>
                                 <h3>
                                    ${price}
                                </h3>
                                <div className='ratings'>
                                    <Ratings rating={rating} />
                                    <span>({rating.count})</span>
                                </div>
                                 <button onClick={addToCart}>Add To Cart</button>
                            </div>
                        </div>
                    </Container>
                    <section>
                        <Container>
                            <h2 className='section-title'>Related Products</h2>
                                <Row>
                                    { relatedCategoryProducts.length == 0 ? 
                                    shimmerComponent :
                                    relatedCategoryProducts.map(product => {
                                        return(
                                            <Col key={product.id} sm={6} md={4} lg={3}>
                                                <Products product={product} />
                                            </Col>
                                        )
                                    })}
                                </Row>    
                        </Container>
                    </section>
                    <section>
                        <Container>
                            <BaseComponent />
                        </Container>
                    </section>
                </div>
            )}
        </>
    )
}

export default ProductDetail;