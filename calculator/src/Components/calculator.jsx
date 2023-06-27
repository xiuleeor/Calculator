import React from "react";
import { useState } from "react";
import "../Styles/calculator.css";


function Calculator(params) {
  const[display, setDisplay] = useState("0");
  const [currentMember, setCurrentMember] = useState("0");
  const [equal, setEqual] = useState("");
  
  const handleNumber = (event) => {  
    const number = event.target.textContent;
    if (currentMember==="0") {
      setCurrentMember(number);
      setDisplay(number);
    }else{
        setDisplay(display + number);
      if ((currentMember==="+" || currentMember==="*" || currentMember==="/" || currentMember==="-")) {
        setCurrentMember(number);
      }else{
        setCurrentMember(currentMember + number);
      }
    }
    if (display.includes("=")) {
      setCurrentMember(number);
      setDisplay(number);
      setEqual(false);
    }
  };

  const handleOperator = (event) => {
    let operator = event.target.textContent;
    const array = display.split(" ");
    const lastElement = array[array.length-1];
    if (lastElement === "." || currentMember.charAt(currentMember.length - 1) === ".") {
      return
    }
      setCurrentMember(operator); 
    if (array.length >= 3 && !Number(array[array.length-1]) && !Number(array[array.length-3])) {
      array.splice(array.length-4, 3, operator);
      setDisplay(array.join(' '));
    }else if (currentMember !== "-" && operator !== "-" && (array[array.length-2]==="+" || array[array.length-2]==="*" || array[array.length-2]==="/" || array[array.length-2]==="-") && !Number(array[array.length-1])) {
      array.splice(array.length-2, 1, operator);
      setDisplay(array.join(' '));
    }else{
      setDisplay(display + " " + operator + " " );
    }    
    if (display.includes("=")) {
      setDisplay(currentMember + " " + operator + " ");
    }
  };

  const handleEqual = () => {
    let result = eval(display).toString()
    setDisplay( display + "=" + result);
    setCurrentMember(result);
    setEqual(true);
  };
  
  const handleDecimalClick = () => {
    const array = currentMember.split("");
    const lastElement = array[array.length-1];
    if (lastElement === "+" || lastElement === "-" || lastElement === "*" || lastElement === "/" || array[array.length-1] === ".") {
      return; 
    }
    if (array.includes(".")) {
      return
    }else{
      setDisplay(display + ".");
      setCurrentMember(currentMember + ".")
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setCurrentMember("0");
  }
  
  return(
    <div className="calculator">
      <div id="all" className="row">{display}</div>
      <div id="display" className="row">{currentMember}</div>
      
      <div id="clear" className="pad" onClick={handleClear}>AC</div>
      <div id="divide" className="pad sign" onClick={handleOperator}>/</div>
      <div id="multiply" className="pad sign" onClick={handleOperator}>*</div>
      <div id="subtract" className="pad sign" onClick={handleOperator}>-</div>
      <div id="seven" className="pad" onClick={ handleNumber}>7</div>
      <div id="eight"  className="pad" onClick={handleNumber}>8</div>
      <div id="nine" className="pad" onClick={handleNumber}>9</div>
      <div id="four" className="pad" onClick={handleNumber}>4</div>
      <div id="five" className="pad" onClick={handleNumber}>5</div>
      <div id="six" className="pad" onClick={handleNumber}>6</div>
      <div id="equals" className="pad" onClick={handleEqual}>=</div>
      <div id="one" className="pad" onClick={handleNumber}>1</div>
      <div id="two" className="pad" onClick={handleNumber}>2</div>
      <div id="three" className="pad" onClick={handleNumber}>3</div>
      <div id="add" className="pad sign" onClick={handleOperator}>+</div>
      <div id="zero" className="pad" onClick={handleNumber}>0</div>
      <div id="decimal" className="pad" onClick={handleDecimalClick}>.</div>
      
      
 
      
    </div>
  )
}

export default Calculator; 


