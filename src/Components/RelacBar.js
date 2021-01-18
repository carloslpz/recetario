import React from 'react'

import {Link} from 'react-router-dom'
import {Card, Carousel, Container, Col, Row } from 'react-bootstrap'
import CardReceta from '../Components/CardReceta'

import './CSS/RelacBar.css'
import imgReceta from '../Images/mainReceta.jpg'
import imgReceta2 from '../Images/mainReceta2.jpg'
import imgReceta3 from '../Images/mainReceta3.jpg'
import imgReceta4 from '../Images/mainReceta4.jpg'
import relacionados from '../Images/relacionados.jpg'

class RelacBar extends React.Component{
    render(){
        return(
            <Carousel className='Relacionados' interval={null} indicators={false} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon Next rounded-circle"/>}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon Next rounded-circle"/>}>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col>
                                <CardReceta 
                                title='Spagheti con chile poblano'
                                likes='88'
                                imgReceta={imgReceta}
                                user= 'Carlos'
                                />
                            </Col>
                            <Col>
                                <CardReceta
                                title='Pollo a la naranja'
                                likes='95'
                                imgReceta={imgReceta2}
                                user= 'Ricardo'
                                />
                            </Col>
                            <Col>
                                <CardReceta
                                title='Pastel de zanahoria'
                                likes='98'
                                imgReceta={imgReceta3}
                                user= 'Carlos'/>
                            </Col>
                            <Col>
                                <CardReceta
                                title='Pozole'
                                likes='93'
                                imgReceta={imgReceta4}
                                user= 'Ricardo'/>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col>
                                <CardReceta/>
                            </Col>
                            <Col>
                                <CardReceta/>
                            </Col>
                            <Col>
                                <CardReceta/>
                            </Col>
                            <Col>
                                <CardReceta/>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className='VerMas'>
                        <Card.Img variant="top" src={relacionados} className='VerMas_img'/>
                        <Card.Body>
                        <Card.Title>Descubre mas recetas</Card.Title>
                        <Card.Text>
                            <Link className='btnConf rounded' to='/receta'>Ver</Link>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Link></Link>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default RelacBar