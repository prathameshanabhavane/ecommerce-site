import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Col from 'react-bootstrap/Col';
import './Categories.scss';

const Categories = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>setCategories(data))
    }, [])

    return(
        <>
            { categories.length == 0 ? 
            <ShimmerSimpleGallery row={1} col={4} card imageHeight={150} /> :
            categories.map((category) => {
                return(
                    <Col key={category} className="category-grid" sm={6} md={3}>
                        <Link to={`/product/category/${category}`} key={category} className="category-inner">
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_URL}/img/${category}.png`} />
                            </div>
                            <h2>
                                {category}
                            </h2>
                        </Link>
                    </Col>
                )
            })}
        </>
    )
}

export default Categories