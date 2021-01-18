import React from 'react'
import {Breadcrumb, Button, Container, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import './CSS/Receta.css'

import foto from '../Images/mainReceta.jpg'

import RelacBar from '../Components/RelacBar'
import NavBar from '../Components/NavBar'
import TitleRecetaMini from '../Components/TitleRecetaMini'
import Footer from '../Components/Footer'


function Receta(){
    return(
        <div>
            <NavBar/>
            <div className="Background">
                <div className="Main">
                    <Breadcrumb className='Breadcrumbs'>
                        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href='/'>Categoria</Breadcrumb.Item>
                        <Breadcrumb.Item href='/' active>Esta receta</Breadcrumb.Item>
                    </Breadcrumb>
                    <TitleRecetaMini
                        title='spaghetti con chile poblano'
                        likes='88'
                        tiempo='0:40'
                        user= 'Carlos'
                    />
                    <span className='Main__opciones'>
                        <Button className='Btn-primary'>Receta Guiada</Button>
                        <Link className='Btn-primary' to='/receta/completa'>Mostrar receta completa</Link>
                    </span>
                    <Container className='Presentacion'>
                        <Row>
                            <Col>
                                <img src={foto} className='mainFoto'/>
                            </Col>
                            <Col>
                                <h3>Descripcion</h3>
                                <p className='Presentacion__desc'>
                                Este spaghetti preparado en una cremosa y picosita salsa de chile poblano acompañado con elote será la sensación en casa o en cualquier evento donde la prepares. Es una pasta deliciosa que tiene ingredientes muy mexicanos que no puedes dejar de preparar. ¡Inténtalo! 
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className='Btn-primary'>Comenzar receta</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <h3>Relacionados</h3>
                        </Row>
                        <Row>
                            <RelacBar/>
                        </Row>
                    </Container>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Receta;