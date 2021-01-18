import React from 'react'
import {Button, Col, Container, Image, DropdownButton, Dropdown, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import logo from '../Images/logo.PNG'
import def_pic from '../Images/chef.svg'
import { render } from '@testing-library/react'
import './CSS/UnregNavBar.css'

class UnregNavBar extends React.Component{
    render(){
        return(
        <Container fluid className='Navbar'>
                    <Col className="Navbar__logo">
                        <a href="/"><img src={logo} className='icon'/></a>
                    </Col>
                    <Col className="Navbar__buscador" xs={4}>
                        <input type="text"/>
                        <Link to='/buscar' className='btn-buscar rounded'>Buscar</Link>
                    </Col>
                    <Col md={{offset:2}}>
                        <Link className='btn-buscar rounded' to='/login'>Iniciar Sesion</Link>
                        <Link className='btn-buscar rounded' to='/register'>Registrar</Link>
                    </Col>
        </Container>
        )
    }
}

export default UnregNavBar;