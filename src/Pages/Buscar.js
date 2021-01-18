import React from 'react'

import {Link} from 'react-router-dom'
import {Container, Col, Dropdown, DropdownButton, Row} from 'react-bootstrap'

import NavBar from '../Components/NavBar'
import CardReceta from '../Components/CardReceta'
import Footer from '../Components/Footer'

import pozole from '../Images/mainReceta4.jpg' 
import pozole2 from '../Images/pozole2.jpg' 
import pozole3 from '../Images/pozole3.jpg' 
import pozole4 from '../Images/pozole4.jpg' 

import './CSS/Buscar.css'

class Buscar extends React.Component{
    render(){
        const resultados = [
            {
                title: 'pozole',
                imgReceta: pozole,
                likes:'93',
                user:'Ricardo',
            },
            {
                title: 'Pozole rojo',
                imgReceta: pozole2,
                likes:'89',
                user:'Carlos',
            },
            {
                title: 'Pozole verde',
                imgReceta:pozole3,
                likes:'89',
                user:'Carlos',
            },
            {
                title: 'Pozole rojo',
                imgReceta:pozole4,
                likes:'79',
                user:'Ricardo',
            },
        ]

        return(
            <div>
                <NavBar/>
                <div className="Background">
                    <div className="Main">
                        <Container>
                            <Row>
                                <Col>4 resultados para "pozole"</Col>
                                
                                <Col>
                                Ordenar por
                                    <DropdownButton id='ordenar' title='...' className='Btn-Ordenar'>
                                        <Dropdown.Item>Mayor calificacion</Dropdown.Item>
                                        <Dropdown.Item>Menor calificacion</Dropdown.Item>
                                        <Dropdown.Item>Mas visitas</Dropdown.Item>
                                        <Dropdown.Item>Menos visitas</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                            </Row>
                            <Row className='Resultados'>
                                <Row className='Fila'>
                                    {
                                        resultados.map((receta) =>{
                                            return(
                                                <Col>
                                                    <CardReceta
                                                        title={receta.title}
                                                        imgReceta={receta.imgReceta}
                                                        likes={receta.likes}
                                                        user={receta.user}    
                                                    />
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Row> 
                        </Container>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Buscar