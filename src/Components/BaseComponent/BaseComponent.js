import { Link } from "react-router-dom";
import ServiceFatures from "../ServiceFeatures/ServiceFatures";
import { Row } from "react-bootstrap";

const BaseComponent = () => {
    return(
        <>
            <section className="banner-tv-section">
                <Link to="/product/14"> 
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/AugART23/samsung_banner.jpg" alt="banner image" />
                </Link>
            </section>
            <section className='services-section'>
                <Row>
                    <ServiceFatures />
                </Row>
            </section>
        </>
    )
}

export default BaseComponent;