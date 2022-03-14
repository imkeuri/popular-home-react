import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import './LograTusMetas.css'

import CreditCard from './Resources/credit-card-regular.svg'
import BookOpen from './Resources/book-open-solid.svg'
import PiedPaper from './Resources/pied-piper-square-brands.svg'

import masterCard from './Resources/mastercard-orbit.png'
import cuentaLibre from './Resources/cuenta-digital-libre-min-portada.jpg'
import gridRight from './Resources/grid-right2.png'
import deposito from './Resources/deposito.png'
import prestamos from './Resources/prestamos.png'
import proteccion from './Resources/proteccion.png'




export default function LograTusMetas() {
    return (
        <section id='logra-tus-metas' className='m-4'  >

            <Container className='mb-4'>
                <Row>

                    <Col className='panel-logra-tus-metas' lg={3} md={3}>
                        <h2>Logra tus<br /> metas</h2>
                        <p>Apoyamos tus objetivos al ofrecerte una mayor seguridad y control con nuestro portafolio de productos.</p>

                        <ul className='p-0'>
                            <li>
                                <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Ahorrar para mi futuro</a>

                            </li>
                            <li>
                                <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Manejo y control de mi dinero</a>

                            </li>
                            <li>
                                <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Rapidez y seguridad al comprar</a>

                            </li>
                        </ul>
                    </Col>

                    <Col className='' lg={9} md={9}>

                        <CardGroup className='card-wrapper-principal'>

                            <Row className='justify-content-center'>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card >
                                        <Card.Img variant='top' src={CreditCard} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title>TARJETAS</Card.Title>
                                            <Card.Text className='text-muted'>Encuentra tu tarjeta de credito ideal y solicitala aqui</Card.Text>
                                            <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Conocer más</a>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card>
                                        <Card.Img variant='top' src={BookOpen} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title>CLIENTES</Card.Title>
                                            <Card.Text className='text-muted'>Garantiza tu futuro a traves de la cuenta ideal para que realices ahorros y transacciones bancarias.</Card.Text>
                                            <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Conocer más</a>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card >
                                        <Card.Img variant='top' src={PiedPaper} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title>PLAN UNICO</Card.Title>
                                            <Card.Text className='text-muted'>Ahorra hasta un 20% en comisiones y obten tasas de interes preferenciales al combinar tus productos en nuestros Planes Unicos.</Card.Text>
                                            <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Conocer más</a>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card >
                                        <Card.Img className='img-boottom' variant='top' src={masterCard} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title>Tarjeta #ORBITPOPULAR</Card.Title>
                                            <Card.Text className='text-muted'>
                                                Aprovechas las nuevas ofertas de los #7DiasConOrbit!
                                                Al pagar con tu #Orbit popular podras disfrutar combos
                                                especiales y precios exclusivos.
                                                Si no la tienes, solicitala  <a href='javascript:void(0)'>aqui</a>
                                            </Card.Text>
                                            <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Conocer más</a>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card >
                                        <Card.Img className='img-boottom' variant='top' src={cuentaLibre} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title>CUENTA DIGITAL LIBRE</Card.Title>
                                            <Card.Text className='text-muted'>!Libre de comisiones al realizar todas las
                                                transacciones bancarias a traves de nuestros  <a href='javascript:void(0)'>canales electronicos:</a> Internet
                                                Banking, App Popular, tPago y Cajeros Automaticos
                                            </Card.Text>
                                            <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Conocer más</a>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card>
                                        <Card.Img className='img-boottom' variant='top' src={gridRight} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title style={{ color: '#00c1d5 !important' }}>PLAN UNICO GOLD</Card.Title>
                                            <Card.Text className='text-muted'>¡Empieza a ahorrar ahora mismo! Pide tu Plan Único Gold en cualquiera de nuestras sucursales.</Card.Text>
                                            <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Conocer más</a>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>

                        </CardGroup>

                    </Col>


                </Row>
            </Container>

            <Container style={{ background: '#fff' }} >
                <Row>

                    <Col className='panel-logra-tus-metas' lg={3} md={3}>
                        <h2>Logra tus<br /> metas</h2>
                        <p>Apoyamos tus objetivos al ofrecerte una mayor seguridad y control con nuestro portafolio de productos.</p>

                        <ul className='p-0'>
                            <li>
                                <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Ahorrar para mi futuro</a>

                            </li>
                            <li>
                                <a href="javascript:void(0)"><FontAwesomeIcon icon={faAngleRight} />Manejo y control de mi dinero</a>

                            </li>
                            <li>
                                <a href="javascript:void(0)"><FontAwesomeIcon icon={faAngleRight} />Rapidez y seguridad al comprar</a>

                            </li>
                        </ul>
                    </Col>

                    <Col className='' lg={9} md={9}>

                        <CardGroup className='card-wrapper-principal'>

                            <Row className='justify-content-center'>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card >
                                        <Card.Img variant='top' src={prestamos} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title>PRESTAMOS PERSONALES</Card.Title>
                                            <Card.Text className='text-muted'>Cuenta con nosotros si estas buscando remodelar tu casa, irte de viaje o incluso consolidar tus deudas</Card.Text>
                                            <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Conocer más</a>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card>
                                        <Card.Img variant='top' src={deposito} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title>CERTIFICADOS DE DEPOSITO</Card.Title>
                                            <Card.Text className='text-muted'>Los Certificados de Depositos Popular, en pesos, en dolares o euros, te brindan mas seguridad y tasa mas competitivas.</Card.Text>
                                            <a href='javascript:void(0)'><FontAwesomeIcon icon={faAngleRight} />Conocer más</a>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card >
                                        <Card.Img variant='top' src={proteccion} alt=''/>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title>PROTECCION COMPLETA</Card.Title>
                                            <Card.Text className='text-muted'>Te brindamos toda la proteccion que necesitas con una gama de seguros que velan por tu tranquilidad.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card >
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title style={{ color: '#00c1d5' }}>UN PRESTAMO PARA CADA NECESIDAD</Card.Title>
                                            <Card.Text className='text-muted'>
                                                ¿Necesitas un prestamo para un electrodomestico, viajar o cualquier otro proposito que consideres importantes?
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card >
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title style={{ color: '#00c1d5' }}>MARIA S. - SANTO DOMINGO</Card.Title>
                                            <Card.Text className='text-muted'>"Deposité toda mi confianza en el Popular, Inmediatamente sentí un
                                                respaldo unico y la tranquilidad de que mi inversion esta segura"</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col className=' d-flex align-items-stretch' lg={4} md={4}>
                                    <Card>
                                        <Card.Body className=' d-flex flex-column'>
                                            <Card.Title style={{ color: '#00c1d5' }}>PLAN UNICO GOLD</Card.Title>
                                            <Card.Text className='text-muted'>¡Empieza a ahorrar ahora mismo! Pide tu Plan Único Gold en cualquiera de nuestras sucursales.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>

                        </CardGroup>

                    </Col>


                </Row>

            </Container>

        </section>
    )
}
