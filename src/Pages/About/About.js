import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
    return(
        <>
           <div className='about-page page static-page'>
                <section>
                    <h1 className='page-header'>
                        About Us
                    </h1>
                    <Container>
                        <section>
                            <h2>Our Mission</h2>
                            <p>Dukan is dedicated to empowering small businesses and individual entrepreneurs by providing them with the tools and resources they need to succeed in the digital marketplace. Our mission is to create a seamless, user-friendly experience that enables our users to reach their goals efficiently.</p>
                        </section>

                        <section>
                            <h2>What We Offer</h2>
                            <p>At Dukan, we offer a wide range of services tailored to the needs of our users:</p>
                            <ul>
                                <li><strong>Website Creation:</strong> Easily create your own professional website with our intuitive platform.</li>
                                <li><strong>Online Store:</strong> Set up an online store to sell products and services with ease.</li>
                                <li><strong>Marketing Tools:</strong> Access a variety of marketing tools to help promote your business effectively.</li>
                                <li><strong>Analytics:</strong> Track your performance with detailed analytics and reporting features.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Our Values</h2>
                            <p>We believe in:</p>
                            <ul>
                                <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
                                <li><strong>Innovation:</strong> We strive to constantly improve and innovate our services for our users.</li>
                                <li><strong>Customer-Centricity:</strong> Our users are at the heart of everything we do. We listen to their needs and continuously evolve our offerings.</li>
                                <li><strong>Community:</strong> We aim to build a supportive community for entrepreneurs and small businesses.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Our Team</h2>
                            <p>Our dedicated team is made up of professionals from various backgrounds, all passionate about helping our users achieve their goals. With a combination of expertise in technology, marketing, and customer service, we are committed to providing the best experience possible.</p>
                        </section>

                        <section>
                            <h2>Get in Touch</h2>
                            <p>We love hearing from you! If you have any questions, feedback, or suggestions, feel free to reach out to us at <a href="mailto:supports@dukan.com">supports@dukan.com</a>. Follow us on social media for the latest updates and tips!</p>
                        </section>
                    </Container>
                </section>
           </div>
        </>
    )
}

export default About;