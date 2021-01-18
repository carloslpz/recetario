import React from 'react'

import {Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import like from '../Images/like.svg'
import chef from '../Images/chef.svg'
import './CSS/CardReceta.css'

class CardReceta extends React.Component{
    render(){
        return(
            <Card>
                <Card.Img variant="top" src={this.props.imgReceta} className='foto'/>
                <Card.Body>
                <Card.Title className='title'>{this.props.title}</Card.Title>
                <Card.Text>
                    <span className='Datos'>
                        {this.props.likes} %
                        <img src={like} className='icono'/>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <img src={chef} className='imgUser rounded'/>
                        Por {this.props.user}
                    </span>
                </Card.Text>
                <Link className='btnConf rounded' to='/receta'>Ver</Link>
            </Card.Body>
            </Card>
        )
    }
}

export default CardReceta