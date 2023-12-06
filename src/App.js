import React, { useState, useEffect } from "react";
import './App.css'

function App() {

  const [val, setVal] = useState('');

  const handleInputFun=(myval)=>{
    if(myval==="C")
    {
      setVal("")
    }else if(myval==="X"){
      setVal(val.slice(0,val.length-1));
    }else{
    setVal(val+myval)
    console.log(val);
    }
    

  }
  const specialhandleInputFun = ()=>{
    console.log(eval(val))
    setVal(eval(val))
  }

  return (<div className="AppContiner">
    <div className="mainContainer">
      <div className="inputcontainer" ><input id="inputt" className="myInput" type="text" placeholder="0" value={val}/></div>
      <div className="menuConatiner">
        <div className="commonDesign">
          <button className="mbtn" id="allclr" onClick={()=>handleInputFun("C")} ><div>C</div></button >
          <button className="mbtn" id="cut" onClick={() => handleInputFun("X")}><div>X</div></button >
          <button className="mbtn" id="mod" onClick={() => handleInputFun("%")}><div>%</div></button >
          <button className="mbtn" id="div" onClick={() => handleInputFun("/")}><div>/</div></button >
        </div>
        <div className="commonDesign">
          <button className="mbtn" id="sev" onClick={() => handleInputFun("7")}><div>7</div></button >
          <button className="mbtn" id="eig" onClick={() => handleInputFun("8")}><div>8</div></button >
          <button className="mbtn" id="nin" onClick={() => handleInputFun("9")} ><div>9</div></button >
          <button className="mbtn" id="mul" onClick={() => handleInputFun("*")}><div>x</div></button >
        </div>
        <div className="commonDesign">
          <button className="mbtn" id="fou" onClick={() => handleInputFun("4")}><div>4</div></button>
          <button className="mbtn" id="fiv" onClick={() => handleInputFun("5")}><div>5</div></button>
          <button className="mbtn" id="six" onClick={() => handleInputFun("6")}><div>6</div></button>
          <button className="mbtn" id="plu" onClick={() => handleInputFun("+")}><div>+</div></button>

        </div>
        <div className="commonDesign">
          <button className="mbtn" id="one" onClick={() => handleInputFun("1")}><div>1</div></button >
          <button className="mbtn" id="two" onClick={() => handleInputFun("2")}><div>2</div></button >
          <button className="mbtn" id="thr" onClick={() => handleInputFun("3")}><div>3</div></button >
          <button className="mbtn" id="min" onClick={() => handleInputFun("-")}><div>-</div></button>
        </div>
        <div className="commonDesign">
          <button className="mbtn" id="zer" onClick={() => handleInputFun("0")}><div>0</div></button>
          <button className="mbtn" id="poi" onClick={() => handleInputFun(".")}> <div>.</div></button >
          <button className="mbtn" id="equ" onClick={() => specialhandleInputFun("=")}> <div>=</div></button>
          <button className="mbtn" id="ent" onClick={() => specialhandleInputFun("=")}> <div>Enter</div></button>
        </div>
      </div>
    </div>
  </div>)
}

export default App;
