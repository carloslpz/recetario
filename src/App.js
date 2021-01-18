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
          <Route exact path='/home' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/usuario' component={Usuario}/>
          <Route exact path='/buscar' component={Buscar}/>
          <Route exact path='/receta' component={Receta}/>
          <Route exact path='/crearReceta' component={CrearReceta}/>
          <Route exact path='/receta/guiada' component={RecetaGuiada}/>
          <Route exact path='/receta/completa' component={RecetaCompleta}/>
          <Route path='/' component={UnregHome}/>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
