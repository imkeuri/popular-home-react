import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/js/splide.cjs'
import '@splidejs/splide/dist/css/splide.min.css';
import './Slider.css'
import logo from '../../../Resources/acuerdo-popular.jpg'
import { Container, Row, Col } from 'react-bootstrap';


import acuerdo from './Resources/acuerdo-microsoft.jpg'
import banner from './Resources/banner-desktop-la-estancia-2.jpg'
import idea from './Resources/banner-idea-popular.jpg'


export default function Slider() {
    return (
        <div id="slider">
            <Container fluid={true} className="p-0">
                <Splide
                    options={{
                        hasAutoplayProgress: true,
                        rewind: true,
                    }} >
                   

                    <SplideSlide>
                        <img src={acuerdo} />
                        <Container fluid={true}>
                            <div className='content-left'>
                                <h3 style={{ fontSize: '31px !important', lineWeight: '30px !important' }}>POPULAR Y MICROSOFT IMPULSARAN LA TRANSFORMACION DIGITAL DE LOS CLIENTES PYMES Y EMPRENDEDORES</h3>
                                <p>La alianza estrategica elevara el liderazgo digital del Popular en el mercado.</p>
                                <a className='btn-orange'>Conoce mas</a>
                            </div>
                        </Container>

                    </SplideSlide>
                    <SplideSlide>
                        <img src={banner} />

                        <Container fluid={true}>
                            <div className='content-left'>
                                <h3 style={{ fontSize: '31px !important', lineWeight: '30px !important' }}>LA ESTANCIA GOLF RESORT<br/> ¡vive bien, vive aquí!      </h3>
                                <p>
                                        Adquiere tu solar y disfruta de la naturaleza, juega una ronda de golf 
                                                        o simplemente quédate en casa y relájate. 
                                                        Un lugar que te brinda seguridad, áreas de esparcimiento y libertad.
                                                    </p>
                                <a className='btn-orange'>Conoce mas</a>
                            </div>
                        </Container>
                    </SplideSlide>
                    <SplideSlide>
                        <img src={idea} />

                        <Container fluid={true}>
                            <div className='content-left'>
                                <h3 style={{ fontSize: '31px !important', lineWeight: '30px !important' }}>MI IDEA POPULAR</h3>
                                <p>Queremos mejorar contigo, compartanos tus ideas sobre nuestros productos, servicios y canales.</p>
                                <a className='btn-orange' style={{color: '#fff', }}>Conoce mas</a>
                            </div>
                        </Container>
                    </SplideSlide>
                </Splide>
            </Container>
        </div>

    )
}
