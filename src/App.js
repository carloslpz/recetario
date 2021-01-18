import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import UnregHome from './Pages/UnregHome'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Usuario from './Pages/Usuario'
import Buscar from './Pages/Buscar'
import Home from './Pages/Home'
import Receta from './Pages/Receta'
import CrearReceta from './Pages/CrearReceta'
import RecetaGuiada from './Pages/RecetaGuiada'
import RecetaCompleta from './Pages/RecetaCompleta'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/recetario' component={UnregHome}/>
          <Route exact path='/recetario/home' component={Home}/>
          <Route exact path='/recetario/login' component={Login}/>
          <Route exact path='/recetario/register' component={Register}/>
          <Route exact path='/recetario/usuario' component={Usuario}/>
          <Route exact path='/recetario/buscar' component={Buscar}/>
          <Route exact path='/recetario/receta' component={Receta}/>
          <Route exact path='/recetario/crearReceta' component={CrearReceta}/>
          <Route exact path='/recetario/receta/guiada' component={RecetaGuiada}/>
          <Route exact path='/recetario/receta/completa' component={RecetaCompleta}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
