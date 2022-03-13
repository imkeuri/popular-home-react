import React from 'react'
import './SalaPrensa.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import image1 from './Resources/rollup.jpg'
import image2 from './Resources/rollup.jpg'



export default function SalaPrensa() {
    return (
        <Container id='sala-prensa'>
            <Row className='sala-prensa-card'>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <h2 >
                        Sala de prensa
                    </h2>
                </Col>


                <Col lg={6} md={6} sm={12} xs={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Card style={{ width: '30rem', height:'auto' }}>
                                <Row>
                                    <Col lg={5} md={5} sm={5} xs={5}>
                                        <Card.Img src={image1} />
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7}>
                                        <Card.Body>
                                            <Card.Title>
                                                NOTA DE PRENSA
                                                <div className='shareBPD-prensa'>
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </div>
                                            </Card.Title>
                                            <Card.Subtitle>
                                                Banco popular ofrecio charla a la Asociacion de Cronistas Sociales sobre economia naranja.
                                            </Card.Subtitle>
                                            <Card.Text>
                                                Seguir leyendo
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>


                <Col className='display' lg={6} md={6} sm={12} xs={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Card style={{ width: '30rem', height:'auto' }}>
                                <Row>
                                    <Col lg={5} md={5} sm={5} xs={5}>
                                        <Card.Img src={image1} />
                                    </Col>
                                    <Col lg={7} md={7} sm={7} xs={7}>
                                        <Card.Body>
                                            <Card.Title>
                                                NOTA DE PRENSA
                                                <div className='shareBPD-prensa'>
                                                    <FontAwesomeIcon icon={faShareAlt} />
                                                </div>
                                            </Card.Title>
                                            <Card.Subtitle>
                                                Banco popular ofrecio charla a la Asociacion de Cronistas Sociales sobre economia naranja.
                                            </Card.Subtitle>
                                            <Card.Text>
                                                Seguir leyendo
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                          
                <a className='ver-mas-noticias mt-5'><FontAwesomeIcon icon={faAngleRight}/>Ver más noticias</a>
            </Row>
        </Container>
    )
}
