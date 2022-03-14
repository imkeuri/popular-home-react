import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import SelloDigital from './Resources/Sello_digital_SB_white.jpg'
import SeloOrganizacion from './Resources/Sello-Organizacion-Carbono-Neutral-Certificada-color.png'
import SelloOro from './Resources/sello-oro-sostenibilidad-3rs-21-23.png'
import SignatoryStamp from './Resources/Signatory-stamp-2021_White.png'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <footer id='footer' className='footer-desktop'>
            <Container>
                <Row className='wrapper-footer'>
                    <Col>
                        <p className='title-footer-section'>Contáctanos</p>
                        <ul>
                            <li>vozdelcliente@bpd.com.do</li>
                            <li>809.544.5555 - Telebanco</li>
                            <li>809.544.6193 - Voz del cliente</li>
                            <li>1.888.864.8251 - Estados Unidos</li>
                            <li>1.877.690.3774 - Cánada</li>
                            <li>1.900.951.676 - España</li>
                            <li>1.800.17.2332 - Italia</li>
                        </ul>
                        <span className='span-footer'>
                            *Sin cargo
                        </span>
                        <Row className='logo'>
                            <Col>
                                <a href='#'>
                                    <img src={SelloOro} alt='' />
                                </a>
                                <a  href='#'>
                                    <img src={SelloDigital} alt='' />
                                </a>
                                <a  href='#'>
                                    <img src={SeloOrganizacion} alt='' />
                                </a>
                                <a  href='#'>
                                    <img src={SignatoryStamp} alt='' />
                                </a>
                            </Col>
                        </Row>


                    </Col>
                    <Col>
                        <p className='title-footer-section'>Banco Popular</p>
                        <ul>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />Sala de prensa</a>
                            </li>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />El Blog del Popular</a>
                            </li>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />Publicaciones Institucionales</a>
                            </li>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />Beneficios Popular</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Turnos y citas</a>
                            </li>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />Mi idea Popular</a>
                            </li>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />Banco Popular en 2020</a>
                            </li>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />Academia Finanzas con proposito</a>
                            </li>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />Sala de prensa</a>
                            </li>
                        </ul>
                        <p className='title-footer-section'>Entidades relacionas</p>
                        <ul>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />Grupo Popular</a>
                            </li>
                            <li>
                                <a  href='#'><FontAwesomeIcon icon={faAngleRight} />AFP Popular</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Inversiones Popular</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />AFI Popular</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Fiduciaria Popular</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Popular Bank, LTD</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Servicios Digitales Popular - AZUL</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />AVANCE</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Infocentro</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />ABRE - Gestion de Bienes</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Fundacion Popular</a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <p className='title-footer-section'>Informaciones</p>
                        <ul>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Tarifario de servicios</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Tarifario de servicios a partir del 31 de marzo 2022</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Proteccion al usuario</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Reclamaciones</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Convenio de productos y servicios</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Pistas de seguridad</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />FATCA</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Prevencion de lavado de activos</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Tutoriales Banca Digital</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Requerimientos para vinculacion</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Transferencias Internaciones</a>
                            </li>
                            <li>
                                <a href='#'><FontAwesomeIcon icon={faAngleRight} />Solicitud valores depositantes fallecidos</a>
                            </li>
                        </ul>

                    </Col>
                </Row>
                <Row className='footer-bottom-legal'>
                    <span>
                        Banco Popular Dominicano, S.A - Banco Mútiple
                    </span>
                    <div>
                        <a>Aviso legal y condiciones de uso |</a>
                        <a>Políticas de privacidad y seguridad |</a>
                        <a>Política de Cookies</a>
                    </div>
                </Row>
            </Container>
        </footer >
    )
}
