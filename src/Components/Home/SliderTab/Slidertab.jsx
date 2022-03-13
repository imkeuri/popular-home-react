import React from 'react'
import './Slidertab.css'
import '@splidejs/splide/dist/js/splide.cjs'
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Row, Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faDesktop, faMobile, faMobileAndroid, faPhone, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';


import internetBaking from './Resources/internet-banking.jpg'
import appPopular from './Resources/BG-banner-portada.jpg'
import tpago from './Resources/bg-banner-tpago.jpg'
import teleBanco from './Resources/telebanco-banner.jpg'
import cajeros from './Resources/cajeros.jpg'
import subAgente from './Resources/subAgente.jpg'



export default function Slidertab() {
    return (
        <section id='slider-tab' className='m-5'>
            <Container >
                <Row className='m-2'>
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <h1 style={{ fontSize: '35px' }}>La banca digital te lo facilita todo</h1>
                        <a className='link'><FontAwesomeIcon icon={faAngleRight} />Ver tutoriales</a>
                    </Col>
                    <Col lg={8} md={8} sm={8} xs={8}>


                        <Row className='wrapper-icon'>
                            <Col  lg={2} md={2}>
                                <FontAwesomeIcon className='icon' icon={faDesktop} />
                                <h3>INTERNET BANKING</h3>
                            </Col>
                            <Col lg={2} md={2}>
                                <FontAwesomeIcon className='icon' icon={faMobile} />
                                <h3>APP POPULAR</h3>
                            </Col>
                            <Col lg={2} md={2}>
                                <FontAwesomeIcon className='icon' icon={faMobileAndroid} />
                                <h3>TPAGO</h3>
                            </Col>
                            <Col lg={2} md={2}>
                                <FontAwesomeIcon className='icon' icon={faPhone} />
                                <h3>TELEBANCO POPULAR</h3>
                            </Col>
                            <Col lg={2} md={2}>
                                <FontAwesomeIcon className='icon' icon={faMagnifyingGlassLocation} />
                                <h3>CAJERO AUTOMATICO</h3>
                            </Col>
                            <Col lg={2} md={2}>
                                <FontAwesomeIcon className='icon' icon={faDesktop} />
                                <h3>SUBAGENTE BANCARIO</h3>
                            </Col>
                        </Row>

                    </Col>
                </Row>

                <Row>
                    <Container>
                        <Col>
                            <Splide options={{
                                hasAutoplayProgress: true,
                                rewind: true,
                                arrows: false
                            }}>
                                <SplideSlide id='InternetBanking' className='tab'>
                                    <Container fluid>
                                        <img src={internetBaking} />
                                        <Row className='slider-tab-content'>
                                            <Col>
                                                <h2>INTERNET BANKING</h2>
                                                <p>Te facilitamos la vida con nuestro canal electronico, para que
                                                    realiaces tus transacciones bancarias en linea en todo momento.
                                                </p>
                                                <a className='btn'>Conocer más</a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </SplideSlide>



                                <SplideSlide id='AppPopular' className='tab'>
                                    <Container fluid>
                                        <img src={appPopular} />
                                        <Row className='slider-tab-content'>
                                            <Col>
                                                <h2>APP POPULAR</h2>
                                                <p>Realiza tus operaciones desde cualquier telefono inteligente, de forma fácil y segura.</p>
                                                <a><FontAwesomeIcon icon={faAngleRight} />Ver tutoriales</a><br /><br />
                                                <a className='btn'>Conocer más</a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </SplideSlide>



                                <SplideSlide id='Tpago' className='tab'>
                                    <Container fluid>
                                        <img src={tpago} />

                                        <Row className='slider-tab-content'>
                                            <Col>
                                                <h2>TPAGO</h2>
                                                <p>No necesitas minutos ni internet para disponer de esta solucion simple que te permite pagar, comprar y enviar dinero desde tu celular.</p>
                                                <a><FontAwesomeIcon icon={faAngleRight} />Ver tutoriales</a><br /><br />
                                                <a className='btn' style={{ backgroundColor: '#9d1d96' }}>Conocer más</a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </SplideSlide>



                                <SplideSlide id='TelebancoPopular' className='tab'>
                                    <Container fluid>
                                        <img src={teleBanco} />
                                        <Row className='slider-tab-content'>
                                            <Col>
                                                <h2>TELEBANCO POPULAR</h2>
                                                <p>Disfruta de la nueva experiencia de navegacion de Telebanco Popular, tú cedula es tu acceso a todos productos.</p>
                                                <a className='btn'>Conocer más</a>
                                            </Col>
                                        </Row>

                                    </Container>
                                </SplideSlide>



                                <SplideSlide id='CajerosAutomatico' className='tab'>
                                    <Container fluid>
                                        <img src={cajeros} />
                                        <Row className='slider-tab-content'>
                                            <Col>
                                                <h2>CAJEROS AUTOMATICOS</h2>
                                                <p>Nuestra flotilla de maquinas te permite ahorrar tiempo, depositar efectivo en linea y disponer de los recursos depositados al instante.</p>
                                                <a><FontAwesomeIcon icon={faAngleRight} />Ver tutoriales</a><br /><br />
                                                <a className='btn'>Conocer más</a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </SplideSlide>




                                <SplideSlide id='SubAgente' className='tab'>
                                    <Container>
                                        <img src={subAgente} />
                                        <Row className='slider-tab-content'>
                                            <Col>
                                                <h2>TU SUBAGENTE POPULAR ES UN<br /> ALIADO EN QUIEN CONFIAR</h2>
                                                <p>Recibe tus remesas y realiza tus depositos, retiros, compra de recarga y pagos de tarjetas, prestamos y servicios en un Subagente Popular al lado de ti.</p>
                                                <a><FontAwesomeIcon icon={faAngleRight} />Ver tutoriales</a><br /><br />
                                                <a className='btn' style={{ backgroundColor: '#00C1D5' }}>Conocer más</a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </SplideSlide>
                            </Splide>
                        </Col>
                    </Container>
                </Row>
            </Container >
        </section >
    )
}
