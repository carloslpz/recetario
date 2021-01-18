import React from 'react'

import {Button, Container, Col, Row, Tab, Tabs} from 'react-bootstrap'

import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

import chef from '../Images/chef.svg'
import receta from '../Images/mainReceta.jpg'
import './CSS/Usuario.css'

class Usuario extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className="Background">
                    <div className="Main">
                        <Container>
                            <Row className='Top'>
                                <Col>
                                    <img src={chef} className='user_photo rounded'/>
                                </Col>
                                <Col>
                                    <Row>
                                        <h4>
                                            xUsuario 
                                        </h4>
                                    </Row>
                                    <Row>
                                        <h4>
                                        # Recetas
                                        </h4>
                                    </Row>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Tabs defaultActiveKey="info">
                                    <Tab eventKey="info" title="Información">
                                        <Col className='Info rounded'>
                                            <Col>
                                                <Row> 
                                                    <img src=""/> Nombre Completo
                                                </Row> 
                                                <Row> 
                                                    <img src=""/> 00/00/0000
                                                </Row> 
                                                <Row> 
                                                    <img src=""/> user@mail.com
                                                </Row>
                                                <Row>
                                                    <Button>Editar</Button>
                                                </Row> 
                                            </Col>
                                        </Col> 
                                    </Tab>
                                    <Tab eventKey="MasTarde" title="Cocinar más tarde">
                                        <RecIndiv/>
                                        <RecIndiv/>
                                        <RecIndiv/>
                                        <RecIndiv/>
                                    </Tab>
                                    <Tab eventKey="Autoria" title="Mis recetas">
                                        <RecIndiv/>
                                        <RecIndiv/>
                                        <RecIndiv/>
                                        <RecIndiv/>
                                    </Tab>
                                </Tabs>
                            </Row>
                        </Container>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }

}

class RecIndiv extends React.Component{
    render(){
        return(
            <Row className='RecInd'>
                <Col><img src={receta} className='plh_receta'/></Col>
                <Col>
                    <Row><h3>Titulo de la receta</h3></Row>
                    <Row><p>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                        </p>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Usuario