import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from "../../Components/Products/Products";

const ProductCategory = () => {
    const [products, setProducts] = useState([]);
    const params = useParams();
    const currentCateogry = params.category;
    // console.log(params.category);
    // console.log(product);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${currentCateogry}`)
            .then(res=>res.json())
            .then(data=>setProducts(data))
    }, [currentCateogry])

    const shimmerComponent = window.matchMedia("(max-width: 600px)").matches ? 
        <ShimmerSimpleGallery row={4} col={1} card imageHeight={300} caption /> : 
        <ShimmerSimpleGallery row={2} col={4} card imageHeight={300} caption /> ;

    return(
        <>
            <div className="category-page page">
                <Container>
                    <Row>
                        { products.length == 0 ? 
                        shimmerComponent :
                        products.map(product => {
                            return(
                                <Col key={product.id} sm={6} md={4} lg={3}>
                                    <Products product={product} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProductCategory;