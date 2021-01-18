import { propTypes } from "react-bootstrap/esm/Image";

// ArtyomCommands.js
export default class ArtyomCommandsManager {

    // The ArtyomCommandsManager class expects as argument in the constructor
    // an already declared instance of Artyom.js
    constructor (ArtyomInstance){
        this._artyom = ArtyomInstance;
    }
    
    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(sigPaso, prevPaso){
        let Artyom = this._artyom;

        // Here you can load all the commands that you want to Artyom
        return Artyom.addCommands([
            {
                indexes: ["siguiente", "avanzar", "proximo paso", "avanza"],
                action: () => {
                    Artyom.say("Avanzando paso");
                    sigPaso()
                }
            },
            {
                indexes: ["anterior", "retroceder", "regresar", "regresa"],
                action: () => {
                    Artyom.say("Retrocediendo paso");
                    prevPaso()
                }
            },
            {
                indexes: ["iniciar", "inicia"],
                action: () => {
                    Artyom.say("iniciando cronometro?");
                    console.log("iniciando cronometro?");
                }
            },
            {
                indexes: ["continuar", "reanudar", "pausa", "reanuda"],
                action: () => {
                    Artyom.say("reanudando cronometro?");
                    console.log("reanudando cronometro?");
                }
            },
            {
                indexes: ["pausar", "pausa"],
                action: () => {
                    Artyom.say("pausando cronometro");
                    console.log("pausando cronometro");
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
    }
}