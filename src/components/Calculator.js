import React, { useState } from 'react';

import './Calculator.css';
import Button from './Button'
import Screen from './Screen'

function Calculator () {
  const [result, setResult] = useState('0')
  const [memory, setMemory] = useState(0)
  const [operator, setOperator] = useState(null)

  const resultFloat = parseFloat(result)

  const calculateResults = (operator) => {
    if (operator === '+') {
      setMemory((memory + resultFloat))
    } else if (operator === '-') {
      setMemory((memory - resultFloat))
    } else if (operator === 'x') {
      setMemory((memory * resultFloat))
    } else if (operator === '÷') {
      setMemory((memory / resultFloat))
    }
  }

  const handleOperator = (currentOperator) => {
    if (operator !== null) {
      calculateResults(operator)
    }
    else {
      setMemory(parseFloat(result))
    }
    setResult('0')
    setOperator(currentOperator)
  }

  const handleClick = (value) => {
    if (value === 'AC') {
      setResult('0')
      setMemory(null)
      return
    }

    if (value === '%') {
      setResult((resultFloat / 100).toString())
      setMemory(null)
      return
    }

    if (value === '±') {
      setResult((resultFloat * -1).toString())
      return
    }

    if (value === '.') {
      if (result.includes('.')) return

      setResult(result + '.')
      return
    }

    if (['+', '-', 'x', '÷'].includes(value)) {
      handleOperator(value)
      return
    }

    if (value === '=') {
      if (!operator) return

      if (operator === '+') {
        setResult((memory + resultFloat))
      } else if (operator === '-') {
        setResult((memory - resultFloat))
      } else if (operator === 'x') {
        setResult((memory * resultFloat))
      } else if (operator === '÷') {
        setResult((memory / resultFloat))
      }
      setMemory(null)
      setOperator(null)
      return
    }

    if (result[result.length - 1] === '.') {
      setResult(result + value)
    } else {
      setResult(parseFloat(resultFloat + value).toString())
    }
  };

  return (
    <div>
      <div className="calculator">
      <Screen value={result}/>
      <Button onClick={handleClick} value='AC' bgColor="9e9c9c"/>
      <Button onClick={handleClick} value='±' bgColor="9e9c9c"/>
      <Button onClick={handleClick} value='%' bgColor="9e9c9c"/>
      <Button onClick={handleClick} value='÷' bgColor="d16e35"/>
      <br />
      <Button onClick={handleClick} value='7' />
      <Button onClick={handleClick} value='8' />
      <Button onClick={handleClick} value='9' />
      <Button onClick={handleClick} value='x' bgColor="d16e35"/>
      <br />
      <Button onClick={handleClick} value='4' />
      <Button onClick={handleClick} value='5' />
      <Button onClick={handleClick} value='6' />
      <Button onClick={handleClick} value='-' bgColor="d16e35"/>
      <br />
      <Button onClick={handleClick} value='1' />
      <Button onClick={handleClick} value='2' />
      <Button onClick={handleClick} value='3' />
      <Button onClick={handleClick} value='+' bgColor="d16e35"/>
      <br />
      <Button onClick={handleClick} value='0' width='160'/>
      <Button onClick={handleClick} value='.' />
      <Button onClick={handleClick} value='=' bgColor="d16e35"/>
      </div>

    </div>
  );
}

export default Calculator;
