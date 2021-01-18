import React from 'react'

import NavBar from '../Components/NavBar'
import SearchBar from '../Components/SearchBar'
import RecomCont from '../Components/RecomCont'
import RelacBar from '../Components/RelacBar'
import Footer from '../Components/Footer'

class Home extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className="Background">
                    <div className="Main">
                        <SearchBar/>
                        <h3>¿Qué vas a preparar hoy?</h3> 
                        <RecomCont/>
                        <hr/>
                        <h3>Recetas populares</h3>
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
        )
    }

}

export default Home