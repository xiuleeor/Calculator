import React, { useState } from "react";
import "../Styles/calculator.css";
import {chars} from "../Data/chars";
import {operators} from "../Data/operators";

function Calculator(params) {

  const [char, setChar] = useState(0);
  const [operation, setOperation] = useState("")
  
  const handleNumbers = (number)=>{
    let display = [char, ...(number)]
    display[0] === 0 && display.shift();
    setChar(display);
    setOperation( [operation, ...number])
      
    
  
    
  }
  
  
  const handleoperator = (operator) => {
    setChar(operator);
    setOperation([operation, ...operator]);
  }

  const handleClear = () => {
    setChar(0);
    setOperation("")
  }


  return(
    <div className="container">
      <div className="display" id="display">
        <div className="all-chars">{operation}</div>
        <div className="current-chars" >{char}</div>
      </div>
      <div className="pads">
        <div className="pad" id="clear" onClick={()=>handleClear()}>ac</div>
        { operators.map((pad, index)=>{
          return(
            <div className="pad" key={index} id={pad.id} onClick={()=> handleoperator(pad.child)}>{pad.child}</div>
          )
        })}
        <div className="pad"  id="equals">=</div>
        { chars.map((pad, index)=>{
          return(
            <div className="pad" key={index} id={pad.id} onClick={()=>handleNumbers(pad.child)}>{pad.child}</div>
          ) 
        })}
      </div>
    </div>
  )
}

export default Calculator;