import React from 'react'

import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import lupa from '../Images/buscar.svg'
import './CSS/SearchBar.css'

class SearchBar extends React.Component{
    render(){
        return(
            <div className='SearchBar'>
                <div className='SearchBar__inner rounded'>
                    <input type="text" className='rounded' placeholder='Busca una receta, ingrediente o categoría'/>
                    <Link className='btn_buscar' to='/buscar'> <img src={lupa}/></Link>
                </div>
            </div>
        )
    }
}
export default SearchBar