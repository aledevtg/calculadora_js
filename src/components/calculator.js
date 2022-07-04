import './styles/calculator.css';
import Button from './commons/Buttons';
import { useState } from 'react';

const Calculator = () => {
    const [operacion, setOperacion] = useState("");
    const [estado, setEstado] = useState(false);
    return (
        <div className="container">
            <div className="comp-1">
                <button id="ce-1" onClick={() => {
                    setOperacion("");
                }}> CE </button>
                <div className="screen">
                    <h3 className="res">{operacion}</h3>
                </div>
            </div>
            <div className="btn-1-op" id="num_sim">
                <Button label="7" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}7`);
                    } else {
                        setOperacion(`7`);
                        setEstado(false);
                    }
                }} />
                <Button label="8" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}8`);
                    } else {
                        setOperacion(`8`);
                        setEstado(false);
                    }
                }} />
                <Button label="9" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}9`);
                    } else {
                        setOperacion(`9`);
                        setEstado(false);
                    }
                }} />
                <Button label="/" idName="color-btn" accion={() => {
                    const ultimo = operacion.slice(-1);
                    if (ultimo !== '*' && ultimo !== '-' && ultimo !== '.'
                        && ultimo !== '+' && ultimo !== '/') {
                        setOperacion(`${operacion}/`);
                    }
                }} />
                <Button label="4" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}4`);
                    } else {
                        setOperacion(`4`);
                        setEstado(false);
                    }
                }} />
                <Button label="5" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}5`);
                    } else {
                        setOperacion(`5`);
                        setEstado(false);
                    }
                }} />
                <Button label="6" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}6`);
                    } else {
                        setOperacion(`6`);
                        setEstado(false);
                    }
                }} />
                <Button label="*" idName="color-btn" accion={() => {
                    const ultimo = operacion.slice(-1);
                    if (ultimo !== '*' && ultimo !== '-' && ultimo !== '.'
                        && ultimo !== '+' && ultimo !== '/') {
                        setOperacion(`${operacion}*`);
                    }
                }} />
                <Button label="1" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}1`);
                    } else {
                        setOperacion(`1`);
                        setEstado(false);
                    }
                }} />
                <Button label="2" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}2`);
                    } else {
                        setOperacion(`2`);
                        setEstado(false);
                    }
                }} />
                <Button label="3" accion={() => {
                    if (!estado) {
                        setOperacion(`${operacion}3`);
                    } else {
                        setOperacion(`3`);
                        setEstado(false);
                    }
                }} />
                <Button label="-" idName="color-btn" accion={() => {
                    const ultimo = operacion.slice(-1);
                    if (ultimo !== '*' && ultimo !== '-' && ultimo !== '.'
                        && ultimo !== '+' && ultimo !== '/') {
                        setOperacion(`${operacion}-`);
                    }
                }} />
                <Button label="0" accion={() => {
                    setOperacion(`${operacion}0`);
                }} />
                <Button label="." accion={() => {
                    const ultimo = operacion.slice(-1);
                    if (ultimo !== '*' && ultimo !== '-' && ultimo !== '.'
                        && ultimo !== '+' && ultimo !== '/') {
                        setOperacion(`${operacion}.`);
                    }
                }} />
                <Button label="=" idName="color-btn" accion={() => {
                    let pos = operacion.length;
                    if (pos > 0) {
                        let arr = operacion.split('');
                        let last = arr[arr.length - 1];
                        if (last === '+' || last === '-' ||
                            last === '/' || last === '*') {
                            arr.pop();
                            let parse = arr.toString().replaceAll(',', '');
                            let val = parse.length;
                            if (val > 0) {
                                const resultado = eval(parse);
                                setOperacion(resultado);
                                setEstado(true);
                            } else {
                                const resultado = '';
                                setOperacion(resultado);
                                setEstado(true);
                            }
                        } else if (last === '.') {
                            const val = operacion.length;
                            if (val < 2) {
                                const resultado = '0';
                                setOperacion(resultado);
                                setEstado(true);
                            } else {
                                let resultado = eval(operacion);
                                setOperacion(resultado);
                                setEstado(true);
                            }
                        } else {
                            let res = eval(operacion);
                            if (isNaN(res)) {
                                const resultado = 'Error';
                                setOperacion(resultado);
                                setEstado(true);
                            } else {
                                const resultado = res;
                                setOperacion(resultado);
                                setEstado(true);
                            }
                        }
                    } else {
                        const resultado = '';
                        setOperacion(resultado);
                        setEstado(true);
                    }
                }} />
                <Button label="+" idName="color-btn" accion={() => {
                    const ultimo = operacion.slice(-1);
                    if (ultimo !== '*' && ultimo !== '-' && ultimo !== '.'
                        && ultimo !== '+' && ultimo !== '/') {
                        setOperacion(`${operacion}+`);
                    }
                }} />
            </div>
        </div>
    );
}


export default Calculator;