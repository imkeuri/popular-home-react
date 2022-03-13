import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ServiciosUsuario.css'

import VozCliente from './Resources/voz-del-cliente.svg'
import Reclamaciones from './Resources/reclamaciones.svg'
import GestionaTurno from './Resources/gestiona-tu-turno-cita.svg'
import BuscadorOficinasCajeros from './Resources/buscador-oficinas-cajeros-subagentes.svg'
import TarifarioServicios from './Resources/tarifario-de-servicios.svg'
import TransferenciasInternacionales from './Resources/transferencias-internacionales.svg'
import ProteccionUsuario from './Resources/proteccion-al-usuario.svg'

export default function ServiciosUsuario() {
    return (
        <section id="servicios-cliente">
            <Container>
                <Row>
                    <Col>
                        <h2 className='title-servicios'>Servicios al usuario</h2>
                    </Col>
                </Row>
                <Row className='servicios-cliente'>
                    <Col className='servicio-cliente'>
                        <Row>
                            <Col lg={4} md={4} sm={6} xs={6}>
                                <span>
                                    <img src={GestionaTurno} />
                                </span>
                                <h3 style={{fontWeight:'300'}}>Gestiona tu turno</h3>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={6}>
                                <span>
                                    <img src={VozCliente} />
                                </span>
                                <h3 style={{fontWeight:'300'}}>Voz del cliente</h3>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <span>
                                    <img src={Reclamaciones} />
                                </span>
                                <h3 style={{fontWeight:'300'}}>Reclamaciones</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={4} sm={6} xs={6}>
                                <span>
                                    <img src={TarifarioServicios} />
                                </span>
                                <h3 style={{fontWeight:'300'}}>Tarifario de servicios</h3>
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={6}>
                                <span>
                                    <img src={BuscadorOficinasCajeros} />
                                </span>
                                <h3 style={{fontWeight:'300'}}>Buscador de oficinas, cajeros y subagentes</h3>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <span>
                                    <img src={TransferenciasInternacionales} />
                                </span>
                                <h3 style={{fontWeight:'300'}}>Transferencias internacionales</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col lg={12}>
                        <h2 className='title-servicios'>Protección al usuario</h2>
                    </Col>
                    <Col className='servicio-cliente'>
                        <span>
                            <img src={ProteccionUsuario} />
                        </span>
                        <h3 className='pt-5 pb-5' style={{fontWeight:'300'}}>Carta deberes y derechos usuarios</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
