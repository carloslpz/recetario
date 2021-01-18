import React from 'react'
import {Col, Container, Image, DropdownButton, Dropdown, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import logo from '../Images/logo.PNG'
import def_pic from '../Images/chef.svg'
import { render } from '@testing-library/react'
import './CSS/NavBar.css'

class NavBar extends React.Component{
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
                <a href="/"><img src={def_pic} className='icon rounded-circle'/></a>
            </Col>
            <Col>
                <DropdownButton id='menu-usuario' title='juanPrz'>
                    <Dropdown.Item>Crear receta</Dropdown.Item>
                    <Dropdown.Item>Mi perfil</Dropdown.Item>
                    <Dropdown.Item>Mis recetas</Dropdown.Item>
                    <Dropdown.Item>Cocinar mas tarde</Dropdown.Item>
                    <Dropdown.Item>Configuracion</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Container>
        )
    }
}

export default NavBar;