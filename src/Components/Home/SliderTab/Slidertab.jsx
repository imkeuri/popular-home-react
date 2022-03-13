import React from 'react'
import './Slidertab.css'
import '@splidejs/splide/dist/js/splide.cjs'
import '@splidejs/splide/dist/css/splide.min.css';
import internetBaking from './Resources/internet-banking.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Row, Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faDesktop, faMobile, faMobileAndroid, faPhone, faLocationDot, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';


export default function Slidertab() {
    return (
        <section id='slider-tab'>
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <h1>La banca digital te lo facilita todo</h1>
                        <a className='link'><FontAwesomeIcon icon={faAngleRight}/>Ver tutoriales</a>
                    </Col>
                    <Col lg={8} md={8} sm={8} xs={8}>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
