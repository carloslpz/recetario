import React from 'react'

import {Button, Container, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Timer from './Timer' 
import logo from '../Images/logo.PNG'

import './CSS/Paso.css'

class Paso extends React.Component{
    render(){
        return(
            <Container className='Cont__Paso'>
            <Row><h3>{this.props.contenido.title}</h3></Row>
            <Row>
                {
                    this.props.contenido.ings &&
                        <Col>
                            <ul>
                                {this.props.contenido.ings.map(ing => {
                                    return <li key={ing}>{ing}</li>
                                })}
                            </ul>
                            <Button className='btn-Primary'>Enviar a mi correo</Button>
                        </Col>
                }
                {
                    this.props.contenido.procedimiento &&
                    <Col>
                        <Row>
                            <p>{this.props.contenido.procedimiento}</p>
                        </Row>
                        {
                            this.props.contenido.cronom &&
                                <Row>
                                    <Timer
                                        duracion={this.props.contenido.cronom.duracion}
                                        play={this.props.contenido.cronom.play}
                                    />
                                </Row> 
                        }
                    </Col>
                }
                <Col>
                    <img src={this.props.contenido.foto} className='ImgPaso'/>
                </Col>
            </Row>
            </Container>
        )
    }

}

export default Paso