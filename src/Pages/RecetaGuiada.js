import React from 'react'
//Importar config voz
import Artyom from 'artyom.js';
import ArtyomCommandsManager from '../Components/ArtyomCommandsManager.js';

import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import {Button, Container, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Paso from '../Components/Paso'
import CardCalifica from '../Components/CardCalifica'
import Footer from '../Components/Footer'

import 'react-step-progress/dist/index.css';

import mainReceta from '../Images/mainReceta.jpg'
import paso1 from '../Images/paso1.jpg'
import logo from '../Images/logo.PNG'

//const ings =


function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
}

const listener = new Artyom();

class RecetaGuiada extends React.Component{

    constructor (props, context){
        super(props, context);
        this.state = {
            artyomActive: false,
            textareaValue: "",
            artyomIsReading: false,
            metaReceta:{
                title: 'Spaghetti con chile poblano',
                descripcion: 'Este spaghetti preparado en una cremosa y picosita salsa de chile poblano acompañado con elote será la sensación en casa o en cualquier evento donde la prepares. Es una pasta deliciosa que tiene ingredientes muy mexicanos que no puedes dejar de preparar. ¡Inténtalo!',
                pasoActual: 0,
                numPasos: 2
            },
            contenido: [
                {
                    title: "Prepara los ingredientes",
                    ings: ["2 litros de agua", 
                            "1 pizca de sal", 
                            "1 paquete de spaghetti",
                            "1 kilo de chile poblano",
                            "500 mililitros de crema",
                            "1 lata de elotes",
                            "500 mililitros de leche de vaca"],
                    procedimiento: null,
                    foto: mainReceta,
                    cronom: null
                },
                {
                    title: "Paso 1",
                    ings: null,
                    procedimiento: "Calentar el agua con la sal con el aceite hasta que hierva, agregar la sopa y cocinar por 15 minutos, ya que este lista escurre.",
                    foto: paso1,
                    cronom: {
                        duracion: (15*60),
                        play: false
                    }
                },
                {
                    title: "Paso 2",
                    ings: null,
                    procedimiento: "Calentar el agua con la sal con el aceite hasta que hierva, agregar la sopa y cocinar por 15 minutos, ya que este lista escurre.",
                    foto: paso1,
                    cronom: null
                },
            ]
        };
        //let CommandsManager = new ArtyomCommandsManager(listener);
        //CommandsManager.loadCommands(this.sigPaso, this.prevPaso);
        
    }
    
    //Iniciar asistente de voz
    startArtyom() {
        let _this = this;
        this._artyom = listener;
        let Artyom = this._artyom;
        //Comandos Artyom
        listener.addCommands([
            {
                indexes: ["siguiente", "avanzar", "proximo paso", "avanza"],
                action: () => {
                    Artyom.say("Avanzando paso");
                    this.sigPaso()
                }
            },
            {
                indexes: ["anterior", "retroceder", "regresar", "regresa"],
                action: () => {
                    Artyom.say("Retrocediendo paso");
                    this.prevPaso()
                }
            },
            {
                indexes: ["iniciar", "inicia"],
                action: () => {
                    Artyom.say("iniciando cronometro?");
                    this.iniciarCron()
                }
            },
            {
                indexes: ["continuar", "reanudar", "reanuda"],
                action: () => {
                    Artyom.say("reanudando cronometro?");
                    console.log("reanudando cronometro?");
                }
            },
            {
                indexes: ["pausar", "pausa"],
                action: () => {
                    Artyom.say("pausando cronometro");
                    this.pausarCron()
                }
            },
            {
                indexes: ["detener", "deten", "terminar"],
                action: () => {
                    Artyom.say("deteniendo cronometro");
                    console.log("deteniendo cronometro");
                }
            },            
        ]);

        listener.initialize({
            lang: "es-ES",
            debug: true,
            continuous: true,
            soundex: true,
            listen: true
        }).then(() => {
            
            console.log("Control de voz iniciado");
            listener.say("Ya puedes comenzar a decir los comandos");

            _this.setState({
                artyomActive: true
            });
        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen !", err);
        });
    }

    componentWillMount(){
        this.sigPaso = this.sigPaso.bind(this);
        this.prevPaso = this.prevPaso.bind(this);
        this.iniciarCron = this.iniciarCron.bind(this);
        this.pausarCron = this.pausarCron.bind(this);
        this.startArtyom = this.startArtyom.bind(this);
    }
    //Terminar de escuchar al salir de la pagina
    componentWillUnmount(){
        let _this = this;
        listener.fatality().then(() => {
            console.log("Dejando de escuchar");
            Artyom.say("adios");

            _this.setState({
                artyomActive: false
            });
            
        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen neither!", err);

            _this.setState({
                artyomActive: false
            });
        });
    }

    sigPaso(){
        console.log('sig' )
        console.log(this)
        this.setState({
            ...this.state,
            metaReceta:{
                ...this.state.metaReceta,
                pasoActual: this.state.metaReceta.pasoActual + 1
            }
        })
        console.log(`Paso actual: ${this.state.metaReceta.pasoActual}`)
    }

    prevPaso(){
        console.log('prev')
        console.log(this)
        if(this.state.metaReceta.pasoActual != 0)
        this.setState({
            ...this.state,
            metaReceta:{
                ...this.state.metaReceta,
                pasoActual: this.state.metaReceta.pasoActual - 1
            }
        })
    }

    iniciarCron(){
        if(this.state.contenido[this.state.metaReceta.pasoActual].cronom){
            console.log('inicio')
            this.setState({
                ...this.state,
                contenido:{
                    ...this.state.contenido,
                        [this.state.metaReceta.pasoActual]:{
                            ...this.state.contenido[this.state.metaReceta.pasoActual],
                            cronom:{
                                duracion: this.state.contenido[this.state.metaReceta.pasoActual].cronom.duracion,
                                play:true
                            }
                        }
                }
            })
            console.log(this.state.contenido[this.state.metaReceta.pasoActual].cronom.play)
        }else{
            console.log(`no hay meme. Admin triste (Paso ${this.state.metaReceta.pasoActual})`)
        }
    }
    pausarCron(){
        if(this.state.contenido[this.state.metaReceta.pasoActual].cronom){
            console.log('inicio')
            this.setState({
                ...this.state,
                contenido:{
                    ...this.state.contenido,
                        [this.state.metaReceta.pasoActual]:{
                            ...this.state.contenido[this.state.metaReceta.pasoActual],
                            cronom:{
                                duracion: this.state.contenido[this.state.metaReceta.pasoActual].cronom.duracion,
                                play:false
                            }
                        }
                }
            })
            console.log(this.state.contenido[this.state.metaReceta.pasoActual].cronom.play)
        }else{
            console.log(`no hay meme. Admin triste (Paso ${this.state.metaReceta.pasoActual})`)
        }
    }
    detenerCron(){
        if(this.state.contenido[this.state.metaReceta.pasoActual].cronom){
            console.log('inicio')
            this.setState({
                ...this.state,
                contenido:{
                    ...this.state.contenido,
                        [this.state.metaReceta.pasoActual]:{
                            ...this.state.contenido[this.state.metaReceta.pasoActual],
                            cronom:{
                                duracion: this.state.contenido[this.state.metaReceta.pasoActual].cronom.duracion,
                                play:false
                            }
                        }
                }
            })
            console.log(this.state.contenido[this.state.metaReceta.pasoActual].cronom.play)
        }else{
            console.log(`no hay meme. Admin triste (Paso ${this.state.metaReceta.pasoActual})`)
        }
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Link to='/'>
                            <img src={logo} className='Logo rounded' to='/'/>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProgressBar
                            percent={(this.state.metaReceta.pasoActual/this.state.metaReceta.numPasos) * 100 }
                            filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                            />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {
                        !this.state.artyomActive &&
                        <div>
                            <p>Inicia el control por voz </p>
                            <Button className="btn-Primary" onClick={this.startArtyom}>Iniciar</Button>
                        </div>
                    }
                    {
                        this.state.artyomIsReading &&
                        <p>Escuchando</p>
                    }
                    </Col>
                </Row>
                <Row>
                    {   this.state.metaReceta.pasoActual <= this.state.metaReceta.numPasos &&
                        <Col>
                        <Row>
                            <Col>
                                <Paso
                                    contenido={this.state.contenido[this.state.metaReceta.pasoActual]}
                                    voz = {this.state.artyomActive}
                                    />
                            </Col>
                        </Row>
                        <Row>
                            <Col><Button className='btn-Primary' onClick={this.prevPaso}>Paso anterior</Button></Col>
                            <Col><Button className='btn-Primary' onClick={this.sigPaso}>Paso siguiente</Button></Col>
                        </Row>                 
                        </Col>
                    }
                    {
                        this.state.metaReceta.pasoActual > this.state.metaReceta.numPasos &&
                        <Container className='Cont__Paso'>
                            <Row><h3>¡Terminaste!</h3></Row>
                            <Row>
                                <Col>
                                    <Row>
                                        <CardCalifica/>
                                    </Row>
                                    <Row>
                                        <Link className='btn-Primary' to='/'>Inicio</Link>
                                    </Row> 
                                </Col>
                                <Col>
                                    <img src={mainReceta} className='ImgPaso'/>
                                </Col>
                            </Row>
                        </Container>
                    }
                </Row> 
                <Footer/>
            </Container>
        )
    }
}

export default RecetaGuiada