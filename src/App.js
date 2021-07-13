import { useEffect, useState } from "react";
import "./App.css";
// import Input from "./Input";

function App() {
  const [resultSum, setResultSum] = useState();
  const [resultResta, setResultResta] = useState();
  const [resultMultip, setResultMultip] = useState();
  const [resultDiv, setResultDiv] = useState();
  const [resultPotencia, setResultPotencia] = useState();
  const [resultHipotenusa, setResultHipotenusa] = useState();
  const [resultRaiz1, setResultRaiz1] = useState();
  const [resultRaiz2, setResultRaiz2] = useState();

  const [inputVal, setInputVal] = useState(0);
  const [inputVal2, setInputVal2] = useState(0);

  useEffect(() => {
    setResultSum(Number(inputVal) + Number(inputVal2));
    setResultResta(inputVal - inputVal2);
    setResultMultip(inputVal * inputVal2);

    setResultPotencia(Math.pow(inputVal, inputVal2));
    setResultHipotenusa(Math.hypot(inputVal, inputVal2));
    setResultRaiz1(Math.sqrt(inputVal));
    setResultRaiz2(Math.sqrt(inputVal2));

    if (inputVal !== 0 && inputVal2 !== 0) {
      setResultDiv(inputVal / inputVal2);
    } else {
      setResultDiv(0);
    }
  }, [inputVal, inputVal2]);
  const reset = (e) => {
    e.preventDefault();
    setInputVal(0);
    document.getElementById("firstValue").value = 0;
  };

  const reset2 = (e) => {
    e.preventDefault();
    setInputVal2(0);
    document.getElementById("secValue").value = 0;
  };

  const checkType = (e) => {
    let check = isNaN(e.target.value);
    if (!check) {
      setInputVal(e.target.value);
    } else {
      document.getElementById("firstValue").value = "";
      setInputVal(0);
    }
  };
  const checkType2 = (e) => {
    let check = isNaN(e.target.value);
    if (!check) {
      setInputVal2(e.target.value);
    } else {
      document.getElementById("secValue").value = "";
      setInputVal2(0);
    }
  };

  return (
    <>
      <div className="App">
        <h2>Ejercicio calculadora avanzada</h2>

        <div className="main-input">
          <input id="firstValue" onChange={checkType} />
          <button onClick={reset}>Clear</button>
        </div>
        <div className="main-input">
          <input id="secValue" onChange={checkType2} type="text" />
          <button onClick={reset2}>Clear</button>
        </div>
        <div className="results">
          <h3>Resultados</h3>
          <p>Suma {resultSum ? resultSum : "0"}</p>
          <p>Resta {resultResta ? resultResta : "0"}</p>
          <p>Multiplicación {resultMultip ? resultMultip : "0"}</p>
          <p>División {resultDiv ? resultDiv : "0"}</p>
          <p>Potencia {resultPotencia ? resultPotencia : "0"}</p>
          <p>Hipotenusa {resultHipotenusa ? resultHipotenusa : "0"}</p>
          <p>Raiz cuadrada 1er valor {resultRaiz1 ? resultRaiz1 : "0"}</p>
          <p>Raiz cuadrada 2do valor {resultRaiz2 ? resultRaiz2 : "0"}</p>
        </div>
      </div>
    </>
  );
}

export default App;
