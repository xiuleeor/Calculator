import React from "react";
import { useState } from "react";


function Calculator(params) {
  const[display, setDisplay] = useState("0");
  const [fullCalculation, setFullCalculation] = useState("")

  const handleNumber = (event) => {
    const number = event.target.textContent;
    if (display==="0") {
      setDisplay(number);
    }else{
      setDisplay(display + number);
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + " " + operator + " " );
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  } ;
  
  const handleDecimalClick = () => {
    const array = display.split(" ");
    const lastElement = array[array.length-1];
    if (lastElement === "+" || lastElement === "-" || lastElement === "*" || lastElement === "/") {
      return; 
    }
    if (!lastElement.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  }
  
  return(
    <div className="calculator">
      <div>{fullCalculation}</div>
      <div id="display" className="row">{display}</div>
      <div id="clear"  onClick={handleClear}>AC</div>
      <div id="seven" onClick={handleNumber}>7</div>
      <div id="eigth" onClick={handleNumber}>8</div>
      <div id="nine" onClick={handleNumber}>9</div>
      <div id="multiply" onClick={handleOperator}>*</div>
      <div id="four" onClick={handleNumber}>4</div>
      <div id="five" onClick={handleNumber}>5</div>
      <div id="six" onClick={handleNumber}>6</div>
      <div id="divide" onClick={handleOperator}>/</div>
      <div id="one" onClick={handleNumber}>1</div>
      <div id="two" onClick={handleNumber}>2</div>
      <div id="three" onClick={handleNumber}>3</div>
      <div id="add" onClick={handleOperator}>+</div>
      <div id="zero" onClick={handleNumber}>0</div>
      <div id="decimal" onClick={handleDecimalClick}>.</div>
      <div id="equals" onClick={handleEqual}>=</div>
      <div id="substract" onClick={handleOperator}>-</div>
    </div>
  )
}

export default Calculator; 