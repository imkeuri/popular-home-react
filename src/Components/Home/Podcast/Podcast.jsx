import React from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'
import './Podcast.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faAngleRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons'



import PopularTalkIcon from './Resources/Popular-Talk-icon.svg'
import PostKikoCasals from './Resources/Post-Kiko-Casals--PT-BPD.jpg'
import KatiFernanfez from './/Resources/Post-Kati-Fernández-PT-BPD.jpg'
import RosarioArostgui from './Resources/Rosario-Arostegui-thumbnail.png'
import FenixPerez from './Resources/fenix-perez-pt.jpg'

import BlogIcon from './Resources/Blog-icon.svg'
import Articulo from './Resources/Articulo-FCP-mujer.jpg'
import Progreos from './Resources/claves-venetas.jpg'

export default function Podcast() {
    return (

        <section id="podcast" style={{ background: '#f1f3f3' }}>
            <Container>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <h2 className='titulo-principal'>
                            <img className='popular-talk-icon' src={PopularTalkIcon} alt=''/>
                            Popular Talks
                        </h2>
                    </Col>

                    <Col className='' lg={6} md={6} sm={12} xs={12}>

                        <h2 className='titulo-secundario'>Podcast</h2>


                        <Row>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <Card className='card-wrapper'>
                                    <Row>
                                        <Col className='p-0' lg={4} md={4} sm={4} xs={4}>
                                            <div className='cont-time-2'>
                                                <span className='time'>11:11</span>
                                            </div>
                                            <Card.Img src={PostKikoCasals} alt=''/>
                                        </Col>
                                        <Col lg={8} md={8} sm={8} xs={8}>
                                            <Card.Body>
                                                <Card.Title style={{ color: '#00c1d5', fontWeight: 700 }}>Asesoria gastronomica y la economia naranja</Card.Title>
                                                <Card.Text className='text-mute'>Kiko Casals </Card.Text>
                                                <FontAwesomeIcon className='icon-share' icon={faShareAlt} />
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col className='display ' lg={6} md={6} sm={12} xs={12}>

                                <Card>
                                    <Row>
                                        <Col className='p-0' lg={4} md={4} sm={4} xs={4}>
                                            <div className='cont-time-2'>
                                                <span className='time'>11:11</span>
                                            </div>
                                            <Card.Img src={KatiFernanfez} alt=''/>
                                        </Col>
                                        <Col lg={8} md={8} sm={8} xs={8}>
                                            <Card.Body>
                                                <Card.Title style={{ color: '#00c1d5', fontWeight: 700 }}>Kati Fenandez: talento local en ESPN y Disney</Card.Title>
                                                <Card.Text className='text-mute'>Kati Fernandez </Card.Text>
                                                <FontAwesomeIcon className='icon-share' icon={faShareAlt} />
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <a href='#podcast' className="ver-mas ms-2" title="Ver más" ><FontAwesomeIcon icon={faAngleRight} /> Ver más</a><br />
                        </Row>




                    </Col>
                    <Col className='' lg={6} md={6} sm={12} xs={12}>

                        <h2 className='titulo-secundario'>Videos</h2>


                        <Row >
                            <Col className=' d-flex align-items-stretch' lg={6} md={6} sm={12} xs={12}>
                                <Card className='card-wrapper-video'>
                                    <Card.Img src={RosarioArostgui} alt=''/>
                                    <Card.ImgOverlay>
                                        <Row >
                                            <Col lg={12} md={12} sm={12} xs={12}>
                                                <Card.Title className='' style={{ color: '#fff' }}>¿Como tener tu negocio propio?</Card.Title>
                                            </Col>
                                            <Col className=' d-flex justify-content-center' lg={12} md={12} sm={12} xs={12}>
                                                <FontAwesomeIcon className='icon-play p-0' icon={faCirclePlay} />
                                            </Col>
                                            <Col className='video mt-3' lg={9} sm={9} md={9} xs={9}>
                                                <Card.Text style={{ color: '#fff' }}>
                                                    Rosario Arostegui
                                                </Card.Text>
                                            </Col>
                                            <Col lg={3} md={3} sm={3} xs={3}>
                                                <div className='down-Share-video'>
                                                    <span className='icon-share'>
                                                        <FontAwesomeIcon icon={faShareAlt} />
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>


                                    </Card.ImgOverlay>
                                </Card>
                            </Col>


                            <Col className=' d-flex align-items-stretch' lg={6} md={6} sm={12} xs={12}>
                                <Card className='display card-wrapper-video'>
                                    <Card.Img src={FenixPerez} alt=''/>
                                    <Card.ImgOverlay>
                                        <Row >
                                            <Col lg={12} md={12} sm={12} xs={12}>
                                                <Card.Title className='' style={{ color: '#fff' }}>Comienza a organizar tu vidad y tus ideas para el 2022</Card.Title>
                                            </Col>
                                            <Col className=' d-flex justify-content-center' lg={12} md={12} sm={12} xs={12}>
                                                <FontAwesomeIcon className='icon-play p-0' icon={faCirclePlay} />
                                            </Col>
                                            <Col lg={9} sm={9} md={9} xs={9}>
                                                <Card.Text className='' style={{ color: '#fff' }}>
                                                    Fenix Perez
                                                </Card.Text>
                                            </Col>
                                            <Col lg={3} md={3} sm={3} xs={3}>
                                                <div className='down-Share-video'>
                                                    <span className='icon-share'>
                                                        <FontAwesomeIcon icon={faShareAlt} />
                                                    </span>
                                                </div>
                                            </Col>
                                        </Row>


                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <a href='#podcast' className="link_bpd ver-mas ms-2" title="Ver más" ><FontAwesomeIcon icon={faAngleRight} /> Ver más</a><br />
                        </Row>




                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <h2>
                                    <img className='popular-talk-icon' src={BlogIcon} alt=''/>
                                    El Blog del Populalr
                                </h2>
                            </Col>
                            <Col  lg={6} md={6} sm={12} xs={12}>
                                <Card>
                                    <Row>
                                        <Col className='' lg={5} md={5} sm={5} xs={5}>

                                            <Card.Img src={Articulo} alt=''/>

                                        </Col>
                                        <Col className='d-flex align-items-stretch' lg={7} md={7} sm={7} xs={7}>
                                            <Card.Body>
                                                <Row>
                                                    <Col  lg={9} md={9} sm={9} xs={9}>
                                                        <Card.Title style={{fontWeight:'400'}}>CUIDA TUS FINANZAS</Card.Title>
                                                    </Col>
                                                    <Col lg={3} md={3} sm={3} xs={3}>
                                                        <FontAwesomeIcon className='icon-share me-2' icon={faShareAlt} />
                                                    </Col>
                                                </Row>
                                                <Card.Subtitle style={{color:'#00c1d5', fontWeight:'700', fontSize:'17px'}}>Una mujer con proposito financiero</Card.Subtitle>
                                                <Card.Text className='text-muted display'>El manejo del dinero empezara siempre desde el desep genuino de crecer y vivir en paz financiera.</Card.Text>
                                                <p className='saber-mas'>Saber mas</p>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col className='display' lg={6} md={6} sm={12} xs={12}>
                                <Card>
                                    <Row>
                                        <Col className='' lg={5} md={5} sm={5} xs={5}>

                                            <Card.Img src={Progreos} alt=''/>

                                        </Col>
                                        <Col className='p-0 m-0' lg={7} md={7} sm={7} xs={7}>
                                            <Card.Body>
                                                <Row>
                                                    <Col  lg={9} md={9} sm={9} xs={9}>
                                                        <Card.Title style={{fontWeight:'400'}}>PROGRESO CONTINUO</Card.Title>
                                                    </Col>
                                                    <Col lg={3} md={3} sm={3} xs={3}>
                                                        <FontAwesomeIcon className='icon-share me-2' icon={faShareAlt} />
                                                    </Col>
                                                </Row>
                                                <Card.Subtitle style={{color:'#00c1d5', fontWeight:'700', fontSize:'17px'}}>10 Claves que recomienda Brian Tracy para el exito en las ventas</Card.Subtitle>
                                                <Card.Text className='text-muted display'>Conoce en este articulo cuales son las claves que foromar parte del exito de los buenos vendedores</Card.Text>
                                                <p className='saber-mas'>Saber mas</p>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                        <a href='#podcast' className=" ver-mas ms-2" title="Ver más" ><FontAwesomeIcon icon={faAngleRight} /> Ver más</a><br />
                    </Col>
                </Row>
            </Container>
        </section>

    )
}
