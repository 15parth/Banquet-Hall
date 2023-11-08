
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../ComponentStyles/AboutUs.css"



const AboutUs = ({ id }) => {
    return (
        <Container className="mt-4 d-flex align-items-center justify-content-center text-center" id={id} >
            <div className='division'>
                <Row>
                    <Col md={6}>
                        <img
                            className='img-fluid img-responsive'
                            src="../../assets/hall1.jpg"
                            alt='ReactHunt'
                        />
                    </Col>
                    <Col md={6} className="about-us-text">
                        <div className="overlay">
                            <h2>About Us</h2>
                            <p>Choose from a curated selection of banquet halls that suit your taste and budget. We're not just a platform; we're your event partner, dedicated to turning your vision into reality.
                                Let us be the backdrop to your memories, ensuring your special moments are celebrated in style.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default AboutUs;
