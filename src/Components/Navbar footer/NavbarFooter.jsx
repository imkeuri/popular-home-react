import React from 'react'
import './NavbarFooter.css'
import { Container, Navbar, Nav, NavDropdown, Modal, Button, Row, Col, ButtonGroup, ToggleButton, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faLocationDot, faExchange, faGear, faMobileAndroid, faAsterisk, faCommentDots, faCalendar} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'


function ModalExchange(props) {

    const [divisaValue, setDivisaValue] = useState('1');

    const divisas = [
        { name: 'Euro', value: 1 },
        { name: 'Dolar', value: 2 }
    ]

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title className='cambio-moneda-titulo' id='contained-modal-title-vcenter'>
                    <div className='actualizacion-precio float-right'>
                        Ultima actualizacion: {date}
                    </div>
                    <ButtonGroup >

                        {divisas.map((divisa, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`divisas-${idx}`}
                                type="radio"
                                className={idx % 2 ? 'button button-active ' : 'button button-inactive'}
                                name="divisas"
                                value={divisas.value}
                                checked={divisaValue === divisas.value}
                                onChange={(e) => setDivisaValue(e.currentTarget.value)}>
                                {divisa.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <h2>Compramos</h2>
                        <Form.Control
                            type='number'
                            id='comprar'
                            placeholder='US$ 1'
                        />
                        <h2>Vendemos</h2>
                        <Form.Control
                            type='number'
                            id='vender'
                            placeholder='US$ 1'
                        />
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <h2>Valor RD$</h2>
                        <Form.Control
                            type='number'
                            id='comprar'
                            disabled
                            value={54}
                        />
                        <h2>Valor RD$</h2>
                        <Form.Control
                            type='number'
                            id='vender'
                            disabled
                            value={56}
                        />
                    </Col>
                </Row>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="danger">Cerrar</Button>
            </Modal.Footer>
        </Modal>
    )
}


export default function NavbarFooter() {

    const [show, setShow] = useState(false);


    return (
        <section id="navbar-footer">
            <Navbar className='navbar-footer' fixed='bottom'>
                <Container fluid={true} className="p-0">

                    <Navbar.Toggle aria-controls='basic-nav-dropdown' />
                    <Navbar.Collapse id='basic-nav-dropdown' />
                    <Nav className=" w-100 me-auto justify-content-center" >
                        <NavDropdown className='dropdown' id="basic-nav-dropdown" title={<div><Nav.Link className='icon-footer p-0' href="#home"><FontAwesomeIcon icon={faCircleInfo} /></Nav.Link></div>}>
                            <NavDropdown.Item >Centro Digital Popular</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Biblioteca Virtual</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Reconocimientos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Compromiso social</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Proveedores</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Mi idea popular</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Voz del cliente</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Gobierno corporativo</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link className='icon-footer' href="#home">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </Nav.Link>

                        <ModalExchange show={show} onHide={() => setShow(false)} />


                        <Nav.Link className='icon-footer' href="#home" onClick={() => setShow(true)}>
                            <FontAwesomeIcon icon={faExchange} />
                        </Nav.Link>

                        <NavDropdown className='dropdown' id="basic-nav-dropdown" title={<div><Nav.Link className='icon-footer p-0' href="#home"><FontAwesomeIcon icon={faGear} /></Nav.Link></div>}>
                            <NavDropdown.Item >Personales</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Vehiculos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Hipotecario</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Certificado</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Plazo Ahorroo</NavDropdown.Item>
                        </NavDropdown>



                        <Nav.Link className='icon-footer' href="#home"><FontAwesomeIcon icon={faMobileAndroid} /></Nav.Link>
                        <Nav.Link className='icon-footer' href="#home"><FontAwesomeIcon icon={faAsterisk} /></Nav.Link>
                        <Nav.Link className='icon-footer' href="#home"><FontAwesomeIcon icon={faCommentDots} /></Nav.Link>
                        <Nav.Link className='icon-footer' href="#home"><FontAwesomeIcon icon={faCalendar} /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </section>
    )
}
