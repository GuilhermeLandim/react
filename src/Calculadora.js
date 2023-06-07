import './calculadora.css';
import React, { useState } from 'react';

function Calculadora() {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    const handleDigitClick = (digit) => {
        if (displayValue === '0' || waitingForSecondOperand) {
            setDisplayValue(digit);
            setWaitingForSecondOperand(false);
        } else {
            setDisplayValue(displayValue + digit);
        }
    };

    const handleOperatorClick = (selectedOperator) => {
        const inputValue = parseFloat(displayValue);

        if (firstOperand === null) {
            setFirstOperand(inputValue);
        } else if (operator) {
            const result = performCalculation();
            setDisplayValue(String(result));
            setFirstOperand(result);
        }

        setWaitingForSecondOperand(true);
        setOperator(selectedOperator);
    };

    const performCalculation = () => {
        const inputValue = parseFloat(displayValue);

        if (operator === '+') {
            return firstOperand + inputValue;
        } else if (operator === '-') {
            return firstOperand - inputValue;
        } else if (operator === '*') {
            return firstOperand * inputValue;
        } else if (operator === '/') {
            return firstOperand / inputValue;
        } else if (operator === '%') {
            return (firstOperand /100) * inputValue;
        } else if (operator === '+-') {
            return inputValue * -1;
        } 

        return inputValue;
    };

    const handleEqualClick = () => {
        if (!operator || waitingForSecondOperand) return;

        const result = performCalculation();
        setDisplayValue(String(result));
        setFirstOperand(result);
        setOperator(null);
    };

    const handleClearClick = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
    };

    return (
        <div className="container">
            <div className="tela">{displayValue}</div>
            <div className="buttons">
                <div className="row">
                    <button onClick={handleClearClick}>C</button>
                    <button onClick={() => handleOperatorClick('+-')}>+-</button>
                    <button onClick={() => handleOperatorClick('%')}>%</button>
                    <button className="orange" onClick={() => handleOperatorClick('/')}>/</button>
                </div>
                <div className="row">
                    <button onClick={() => handleDigitClick('7')}>7</button>
                    <button onClick={() => handleDigitClick('8')}>8</button>
                    <button onClick={() => handleDigitClick('9')}>9</button>
                    <button className="orange" onClick={() => handleOperatorClick('*')}>*</button>
                </div>
                <div className="row">
                    <button onClick={() => handleDigitClick('4')}>4</button>
                    <button onClick={() => handleDigitClick('5')}>5</button>
                    <button onClick={() => handleDigitClick('6')}>6</button>
                    <button className="orange" onClick={() => handleOperatorClick('-')}>-</button>
                </div>
                <div className="row">
                    <button onClick={() => handleDigitClick('1')}>1</button>
                    <button onClick={() => handleDigitClick('2')}>2</button>
                    <button onClick={() => handleDigitClick('3')}>3</button>
                    <button className="orange" onClick={() => handleOperatorClick('+')}>+</button>
                </div>
                <div className="row">
                    <button className="large-btn" onClick={() => handleDigitClick('0')}>0</button>
                    <button onClick={() => handleOperatorClick('.')}>.</button>
                    <button className="orange" onClick={handleEqualClick}>=</button>
                </div>

            </div>
        </div>
    );
}

export default Calculadora;
