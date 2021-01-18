import React from 'react'

import {Button, Container, Col, Form, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Footer from '../Components/Footer'

import logo from '../Images/logo.PNG'
import './CSS/Login.css'

class Login extends React.Component{
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
                                            <Form.Group controlId="email">
                                                    <Form.Label>Correo electronico</Form.Label>
                                                    <Form.Control type="email" placeholder="Introduce tu correo"/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group controlId="password">
                                                    <Form.Label>Contraseña</Form.Label>
                                                    <Form.Control type="password" placeholder="Introduce tu contraseña"/>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                        <Link to='/' className='Enviar rounded'>Cancelar</Link>
                                        <Link to='/home' className='Enviar rounded'>Iniciar sesion</Link>
                                        </Form.Row>
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

export default Login