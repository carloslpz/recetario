import React from 'react'

import {Button, Container, Col, Form, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Footer from '../Components/Footer'

import logo from '../Images/logo.PNG'
import './CSS/Register.css'

class Register extends React.Component{
    render(){
        return(
            <div>
                <div className="Background">
                    <div className="Main">
                        <Container>
                            <Row>
                                <Col>
                                    <Link to='/'>
                                        <img src={logo} className='Logo rounded'/>
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Form className='Formulario'>
                                    <Col>
                                        <Form.Row>
                                            <Form.Group controlId="name">
                                                    <Form.Label>Nombre</Form.Label>
                                                    <Form.Control type="text"/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group controlId="birthday">
                                                    <Form.Label>Fecha de nacimiento</Form.Label>
                                                    <Form.Control type="date"/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group controlId="user">
                                                    <Form.Label>Usuario</Form.Label>
                                                    <Form.Control type="text" placeholder="Tu nombre de usuario"/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group controlId="email">
                                                    <Form.Label>Correo electronico</Form.Label>
                                                    <Form.Control type="email" placeholder="Introduce tu correo"/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group controlId="password">
                                                    <Form.Label>Contraseña</Form.Label>
                                                    <Form.Control type="password" placeholder='Introduce tu contraseña'/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group controlId="passwordConfirm">
                                                    <Form.Label>Confirma la contraseña</Form.Label>
                                                    <Form.Control type="password" placeholder="La misma de arriba"/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Link to='/' className='Enviar rounded'>Cancelar</Link>
                                        <Link to='/home' className='Enviar rounded'>Crear cuenta</Link>
                                    </Col>
                                </Form>
                            </Row>
                        </Container>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Register