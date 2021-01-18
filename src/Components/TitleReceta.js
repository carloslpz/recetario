import React from 'react'

import {Container, Col, Row, Image} from 'react-bootstrap'

import chef from '../Images/chef.svg'
import reloj from '../Images/reloj.svg'
import like from '../Images/like.svg'
import chart from '../Images/chart.png'
import './CSS/TitleReceta.css'

class TitleReceta extends React.Component{
    render(){
        return(
            <Container className='Cont' fluid='sm'>
                <Row className='Titulo'>
                    <h1>{this.props.title}</h1>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <a href="/"><img src={chef} className='Cont__image rounded'/></a>
                                Por {this.props.user}
                            </Col>
                        </Row>
                        <Col className='Cont__datos'>
                            <Row> {this.props.likes} %<img src={like}/></Row>
                            <Row> <img src={reloj}/> {this.props.tiempo}</Row>
                        </Col>
                    </Col>
                    <Col>
                        <Row>
                            <h3>Descripcion</h3>
                        </Row> 
                        <Row>
                            <p className='Cont__descripcion'>
                                {this.props.descripcion}
                            </p>
                        </Row> 
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TitleReceta