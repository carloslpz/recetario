import React from 'react'

import {Accordion, Button, Container, Col, Row} from 'react-bootstrap'

import RelacBar from '../Components/RelacBar'

import './CSS/RecomCont.css'
import desayuno from '../Images/desayuno.svg'
import comida from '../Images/comida.svg'
import cena from '../Images/cena.png'

class RecomCont extends React.Component{
    render(){
        return(
            <Container className='Contenido rounded'>
                <Col>
                    <Accordion className='Accord'>
                        <Row className='Contenido__Col'>
                            <Accordion.Toggle as={Button} variant="Opcion rounded" eventKey="0">
                                <img src={desayuno} className='iconImg'/> Desayuno
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <RelacBar/>
                            </Accordion.Collapse>
                        </Row>
                        <Row className='Contenido__Col'>
                            <Accordion.Toggle as={Button} variant="Opcion rounded" eventKey="1">
                            <img src={comida} className='iconImg'/> Comida
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <RelacBar/>
                            </Accordion.Collapse>
                        </Row>
                        <Row className='Contenido__Col'>
                            <Accordion.Toggle as={Button} variant="Opcion rounded" eventKey="2">
                                <img src={cena} className='iconImg'/> Cena
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <RelacBar/>
                            </Accordion.Collapse>
                        </Row>
                    </Accordion>
                </Col>
            </Container>

        )
    }
}

export default RecomCont