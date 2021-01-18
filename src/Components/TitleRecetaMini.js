import React from 'react'

import {Container, Col, Row, Image} from 'react-bootstrap'

import chef from '../Images/chef.svg'
import reloj from '../Images/reloj.svg'
import like from '../Images/like.svg'
import chart from '../Images/chart.png'
import './CSS/TitleRecetaMini.css'

class TitleReceta extends React.Component{
    render(){
        return(
            <Container className='Cont' fluid='sm'>
                <Row className='Titulo'>
                    <h2>{this.props.title}</h2>
                </Row>
                <Row className='Cont__datos'>
                    <Col>% {this.props.likes}<img src={like}/></Col>
                    <Col> <img src={reloj}/> {this.props.tiempo}</Col>
                </Row>
                <Row>
                    <Col>
                        <a href="/"><img src={chef} className='Cont__image rounded'/></a>
                        Por {this.props.user}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default TitleReceta