import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {
  const [resultDiv, setResultDiv] = useState();
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (input1 !== 0 && input2 !== 0) {
      setResultDiv(input1 / input2);
    } else {
      setResultDiv(0);
    }

    setList([
      { type: "Suma", res: Number(input1) + Number(input2) },
      { type: "Resta", res: input1 - input2 },
      { type: "Multiplicación", res: input1 * input2 },
      // { type: "División", res: resultDiv },
      { type: "Potencia", res: Math.pow(input1, input2) },
      { type: "Hipotenusa", res: Math.hypot(input1, input2) },
      { type: "Raiz cuadrada 1er valor", res: Math.sqrt(input1) },
      { type: "Raiz cuadrada 2do valor", res: Math.sqrt(input2) },
    ]);
  }, [input1, input2]);

  const check = (e) => {
    let verifIsNumber = isNaN(e.target.value);
    let inputID = e.target.id;
    if (!verifIsNumber && inputID == 1) {
      setInput1(e.target.value);
    } else if (!verifIsNumber && inputID == 2) {
      setInput2(e.target.value);
    } else if (inputID == 1) {
      document.getElementById(e.target.id).value = "";
      setInput1(0);
    } else {
      document.getElementById(e.target.id).value = "";
      setInput2(0);
    }
  };

  const clear = (id) => {
    document.getElementById(id).value = 0;
    if (id === 1) {
      setInput1(0);
    } else {
      setInput2(0);
    }
  };

  return (
    <>
      <div className="App">
        <h2>Ejercicio calculadora avanzada</h2>
        <Input id={1} checkType={check} clear={clear} />
        <Input id={2} checkType={check} clear={clear} />

        <div className="results">
          <h3>Resultados</h3>
          {/* <p>Suma {resultSum ? resultSum : "0"}</p>
          <p>Resta {resultResta ? resultResta : "0"}</p>
          <p>Multiplicación {resultMultip ? resultMultip : "0"}</p> */}
          <p>División {resultDiv ? resultDiv : "0"}</p>
          {/* <p>Potencia {resultPotencia ? resultPotencia : "0"}</p>
          <p>Hipotenusa {resultHipotenusa ? resultHipotenusa : "0"}</p>
          <p>Raiz cuadrada 1er valor {resultRaiz1 ? resultRaiz1 : "0"}</p>
          <p>Raiz cuadrada 2do valor {resultRaiz2 ? resultRaiz2 : "0"}</p> */}

          {list.map((el, index) => {
            return (
              <p key={index}>
                {el.type} {el.res}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
