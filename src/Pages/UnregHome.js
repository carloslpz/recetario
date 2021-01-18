import React from 'react'

import {Carousel} from 'react-bootstrap'

import UnregNavBar from '../Components/UnregNavBar'
import SearchBar from '../Components/SearchBar'
import RelacBar from '../Components/RelacBar'
import Footer from '../Components/Footer'

import receta from '../Images/mainReceta.jpg'
import receta2 from '../Images/mainReceta2.jpg'

import './CSS/UnregHome.css'

class UnregHome extends React.Component{

    render(){

        return(
            <div>
                <UnregNavBar/>
                <div className="Background rounded">
                    <div className="Main">
                        <SearchBar/>
                        <h4>Regístrate para recibir recomendaciones personalizadas</h4> 
                        <Carousel className='Carrusel'>
                            <Carousel.Item>
                                <img src={receta}/>
                                <Carousel.Caption>
                                    <h4>Spaghetti con chile poblano</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={receta2}/>
                                <Carousel.Caption>
                                    <h4>Categoria popular</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <hr/>
                        <h3>Categoria recomendada</h3>
                        <RelacBar/>
                        <hr/>
                        <h3>Categoria recomendada</h3>
                        <RelacBar/>
                        <hr/>
                        <h3>Categoria recomendada</h3>
                        <RelacBar/>
                        <hr/>
                        <Footer/>
                    </div>
                </div> 
            </div>
        );
    }

}

export default UnregHome;