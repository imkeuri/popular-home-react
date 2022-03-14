import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './ComunicateConNosotros.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function ComunicateConNosotros() {
    return (
        <>
        <section id="comunicate-con-nosotros" >
            <Container>
                <Row>
                    <Col>
                        <h2 className='comunicate-title mb-4'>Comunicate con nosotros</h2>
                    </Col>
                </Row>

                <Row className='medios-comunicacion'>
                    <Col className='medio-comunicacion' lg={4} md={4} sm={4} xs={4}>
                        <a>
                            <span>
                                <FontAwesomeIcon className='font-awesome-icon' icon={faEnvelope} />
                            </span>
                            <h3 className='titulo-comunicate' style={{fontWeight:'300'}}>Escribenos</h3>
                        </a>
                    </Col>
                    <Col className='medio-comunicacion' lg={4} md={4} sm={4} xs={4}>
                        <a>
                            <span>
                                <FontAwesomeIcon className='font-awesome-icon' icon={faComment} />
                            </span>
                            <h3 className='titulo-comunicate' style={{fontWeight:'300'}}>Chatea con nosotros</h3>
                        </a>
                    </Col>
                    <Col className='medio-comunicacion' lg={4} md={4} sm={4} xs={4}>
                        <a>
                            <span>
                                <FontAwesomeIcon className='font-awesome-icon' icon={faPhone} />
                            </span>
                            <h3 className='titulo-comunicate' style={{fontWeight:'300'}}>Llamanos</h3>
                        </a>
                    </Col>
                </Row>
                <hr />

            </Container>
        </section>
        </>
        
    )
}
