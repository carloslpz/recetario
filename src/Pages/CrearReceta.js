import React from 'react'

import {Link} from 'react-router-dom'
import {Button, Container, Col, Row, Form} from 'react-bootstrap'

import Footer from '../Components/Footer'

import camara from '../Images/camera.svg'
import add from '../Images/add.svg'
import logo from '../Images/logo.PNG'
import './CSS/CrearReceta.css'

function CrearReceta(){

    const [numPasos, setNumPasos] = React.useState(2);

        return(
            <Container>
                    <Link to='/'>
                        <img src={logo} className='Logo rounded'/>
                    </Link>
                    <h3>¡Comparte tu receta con el mundo!</h3>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="Titulo-tiempo">
                            <Form.Label>Título de tu receta</Form.Label>
                            <Form.Control type="text" placeholder="Ej. Sopa yucateca de lima" />
                            <Form.Label>Tiempo de preparación</Form.Label>
                            <Form.Control type="text" placeholder="Ej. 20 minutos" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>¿Cómo se ve tu platillo terminado?</Form.Label>
                            <Form.Label for="upload-photo" className='Upload'><img src={camara} className='plh_camera'/></Form.Label>
                            <Form.Text muted>
                                Haz click en la camara para subir tu foto
                            </Form.Text>
                            <Form.Control type="file" name="foto" id="upload-photo" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Cuéntanos más de tu receta</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Ej. Esta receta la aprendí de mi mamá, y ha sido pasada de
                            generación en generación. Es mi platillo favorito, y suele
                            prepararla en mi cumpleaños. Recomiendo agregar una pizca
                            de chile para darle más sabor." />
                    </Form.Row>
                    <hr/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="Ingredientes">
                            <h4>Ingredientes</h4>
                            <Form.Control type="text" placeholder="Ej. 2 tazas de harina" className='ing'/>
                            <Form.Control type="text" placeholder="Ej. 3 huevos" className='ing'/>
                            <Button className='btn_add rounded-circle'><img src={add} className='img_add'/></Button>
                        </Form.Group>
                    </Form.Row>
                    <hr/>
                    <Form.Row>
                        <Form.Group as={Col} controlId="Pasos">
                            <h4>Pasos</h4>
                            <h5>1</h5>
                            <Form.Control as="textarea" rows={2} placeholder="Ej. Tamiza el harina seguida por los ingredientes secos" className='ing'/>
                            <Form.Label>¿Cómo deberia verse este paso?</Form.Label>
                            <Form.Label for="upload-photo" className='Upload'><img src={camara} className='plh_camera'/></Form.Label>
                            <Form.Text muted>
                                Haz click en la camara para subir tu foto
                            </Form.Text>
                            <Form.Control type="file" name="foto" id="upload-photo" />
                            <h5>2</h5>
                            <Form.Control as="textarea" rows={2} placeholder="Ej. Agrega poco a poco los huevos y la mantequilla" className='ing'/>
                            <Form.Label>¿Cómo deberia verse este paso?</Form.Label>
                            <Form.Label for="upload-photo" className='Upload'><img src={camara} className='plh_camera'/></Form.Label>
                            <Form.Text muted>
                                Haz click en la camara para subir tu foto
                            </Form.Text>
                            <Form.Control type="file" name="foto" id="upload-photo" />
                            <Button className='btn_add rounded-circle'><img src={add} className='img_add'/></Button>
                            <hr/>
                            <Link to='/receta' className='Enviar rounded'>Crear receta</Link>
                        </Form.Group>
                    </Form.Row>
                </Form> 
                <Footer/>
            </Container>
        )
}

export default CrearReceta