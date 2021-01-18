import React from 'react'
import {Container, Row, Col,  Button} from 'react-bootstrap'

import './CSS/CardCalifica.css'

import like from '../Images/like.svg'
import dislike from '../Images/dislike.svg'

function CardCalifica(){
    return(
        <Container className='Cont'>
            <Col>
                <Row>
                    <h4>Que te parecio la receta?</h4>
                </Row>
                <Row>
                    <Col>
                        <Button className='boton'><img src={dislike}/></Button>
                    </Col>
                    <Col>
                        <Button className='boton'><img src={like}/></Button>
                    </Col>
                </Row> 
            </Col>
        </Container>
    )
}

export default CardCalifica