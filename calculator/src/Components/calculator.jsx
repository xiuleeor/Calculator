import React from "react";
import { useState } from "react";


function Calculator(params) {
  const[display, setDisplay] = useState("");
  const [currentMember, setCurrentMember] = useState("0");
  let minus = 1;

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
  };

  const handleOperator = (event) => {
    let operator = event.target.textContent;
    const array = display.split(" ");
    console.log(array);
    const lastElement = array[array.length-1];
    console.log(lastElement);
    if (lastElement === "." || lastElement.includes(".")) {
      return
    }
      setCurrentMember(operator); 
    if (currentMember === "-") {
      minus++;
    }
    if (minus===2) {
      operator = "+";   
      setCurrentMember("+");   
      minus=1;
    }
    if ((array[array.length-2]==="+" || array[array.length-2]==="*" || array[array.length-2]==="/" || array[array.length-2]==="-") && !Number(array[array.length-1])) {
      console.log(array +" antes");
      array.splice(array.length-2, 1, operator);
      console.log(operator+"op")
      console.log(array+" despues"); 
      setDisplay(array.join(' '));
    }else{
      setDisplay(display + " " + operator + " " );
    }
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  } ;
  
  const handleDecimalClick = () => {
    const array = currentMember.split("");
    console.log(array);
    const lastElement = array[array.length-1];
    console.log(lastElement);
    if (lastElement === "+" || lastElement === "-" || lastElement === "*" || lastElement === "/" || array[array.length-1] === ".") {
      return; 
    }
    console.log(lastElement);
    if (!lastElement.includes(".")) {
      setDisplay(display + ".");
      setCurrentMember(currentMember + ".")
    }
  };


  const handleClear = () => {
    setDisplay(" ");
    setCurrentMember("0");
  }
  
  return(
    <div className="calculator">
      <div id="display" className="row">{display}</div>
      <div id="display" className="row">{currentMember}</div>
      <div id="clear"  onClick={handleClear}>AC</div>
      <div id="seven" onClick={ handleNumber}>7</div>
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