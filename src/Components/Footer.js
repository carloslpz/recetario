import React from 'react'

import {Container, Col, Row} from 'react-bootstrap'

import './CSS/Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <Container className='Foot'>
                <Row>
                    <a href='/'>Preguntas frecuentes</a>
                </Row>
                <Row>
                    © <a href='/'>Acerca de nosotros</a>
                </Row>
            </Container>
        )
    }
}

export default Footer