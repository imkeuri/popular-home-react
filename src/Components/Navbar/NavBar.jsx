import React from 'react'
import './NavBar.css'
import logo from './Resources/BPDlogo.png'
import { Nav, Navbar, Container, Button} from 'react-bootstrap'


export default function NavBar() {
    return (
        
            <header id='navbar'>
                <Navbar className='top-navbar p-0' bg="light" expand="lg" fixed='top' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className=" w-100 m-auto justify-content-center data-toggle" >
                                <Nav.Link className='navItem' href="#home">PERSONAS</Nav.Link>
                                <Nav.Link className='navItem' href="#link">PYME</Nav.Link>
                                <Nav.Link className='navItem' href="#link">EMPRESARIAL E INSTITUCIONAL</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br /><br />
                <Navbar className='p-0 navbar-inferior' bg="light" expand="lg" variant='dark'>
                    <Container>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto justify-content-center">
                                <Navbar.Brand>
                                    <img src={logo} style={{ height: '50px' }} alt=''/>
                                </Navbar.Brand>
                                <Nav.Link className='nav-item-inferior' href="#home">TARJETAS</Nav.Link>
                                <Nav.Link className='nav-item-inferior' href="#link">CUENTAS</Nav.Link>
                                <Nav.Link className='nav-item-inferior' href="#link">PRESTAMOS</Nav.Link>
                                <Nav.Link className='nav-item-inferior' href="#home">INVERSIONES</Nav.Link>
                                <Nav.Link className='nav-item-inferior' href="#link">REMESAS</Nav.Link>
                                <Nav.Link className='nav-item-inferior' href="#link">| JOVEN</Nav.Link>
                                <Nav.Link className='nav-item-inferior' href="#home">PREMIUN |</Nav.Link>
                                <Nav.Link className='nav-item-inferior' href="#link">HazteECO</Nav.Link>
                                <Nav.Link className='' href="#link">
                                    <Button className='button w-100'>
                                        Acceder.
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        
    )
}
