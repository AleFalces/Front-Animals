import React from "react";
import Checkbox from "./Checkbox";
import { useChecked } from "./useChecked";

export default function CheckboxGrid () {
    
    const intitialState = {
        perro: false,
        gato: false,
        comida: false,
        tazas: false,
        indumentaria: false
    }
    const [checked, handlerClickCheckbox] = useChecked(intitialState) 

    return (
        <div>
            <Checkbox name="perro" checked={ checked.perro } setChecked={ handlerClickCheckbox } />
            <Checkbox name="gato" checked={ checked.gato } setChecked={ handlerClickCheckbox } />
            <Checkbox name="comida" checked={ checked.comida } setChecked={ handlerClickCheckbox } />
            <Checkbox name="tazas" checked={ checked.tazas } setChecked={ handlerClickCheckbox } />
            <Checkbox name="indumentaria" checked={ checked.indumentaria } setChecked={ handlerClickCheckbox } />
        </div>
    )
}