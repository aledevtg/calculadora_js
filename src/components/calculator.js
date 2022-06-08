import './styles/calculator.css';
import Button from './commons/Buttons';
import { useState } from 'react';

const Calculator = () => {
    const [operacion, setOperacion] = useState("");
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
                    setOperacion(`${operacion}7`);
                }} />
                <Button label="8" accion={() => {
                    setOperacion(`${operacion}8`);
                }} />
                <Button label="9" accion={() => {
                    setOperacion(`${operacion}9`);
                }} />
                <Button label="/" idName="color-btn" accion={() => {
                    setOperacion(`${operacion}/`);
                }} />
                <Button label="4" accion={() => {
                    setOperacion(`${operacion}4`);
                }} />
                <Button label="5" accion={() => {
                    setOperacion(`${operacion}5`);
                }} />
                <Button label="6" accion={() => {
                    setOperacion(`${operacion}6`);
                }} />
                <Button label="*" idName="color-btn" accion={() => {
                    setOperacion(`${operacion}*`);
                }} />
                <Button label="1" accion={() => {
                    setOperacion(`${operacion}1`);
                }} />
                <Button label="2" accion={() => {
                    setOperacion(`${operacion}2`);
                }} />
                <Button label="3" accion={() => {
                    setOperacion(`${operacion}3`);
                }} />
                <Button label="-" idName="color-btn" accion={() => {
                    setOperacion(`${operacion}-`);
                }} />
                <Button label="0" accion={() => {
                    setOperacion(`${operacion}0`);
                }} />
                <Button label="." accion={() => {
                    setOperacion(`${operacion}.`);
                }} />
                <Button label="=" idName="color-btn" accion={() => {
                    let pos = operacion.length;
                    if (pos > 0) {
                        let arr = operacion.split('');
                        let last = arr[arr.length - 1];
                        if (last === '+' || last === '-' ||
                            last === '/' || last === '*') {
                            let dltlast = arr.pop();
                            let parse = arr.toString().replaceAll(',', '');
                            const resultado = eval(parse);
                            setOperacion(resultado);
                        }
                    } else {
                        setOperacion("");
                    }
                    const resultado = eval(operacion);
                    setOperacion(resultado);
                }} />
                <Button label="+" idName="color-btn" accion={() => {
                    setOperacion(`${operacion}+`);
                }} />
            </div>
        </div>
    );
}


export default Calculator;