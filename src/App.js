import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";

function App() {
	const [resultSum, setResultSum] = useState();
	const [resultResta, setResultResta] = useState();
	const [resultMultip, setResultMultip] = useState();
	const [resultDiv, setResultDiv] = useState();
	const [resultPotencia, setResultPotencia] = useState();
	const [resultHipotenusa, setResultHipotenusa] = useState();
	const [resultRaiz1, setResultRaiz1] = useState();
	const [resultRaiz2, setResultRaiz2] = useState();

	const [input1, setInput1] = useState(0);
	const [input2, setInput2] = useState(0);

	useEffect(() => {
		setResultSum(Number(input1) + Number(input2));
		setResultResta(input1 - input2);
		setResultMultip(input1 * input2);

		setResultPotencia(Math.pow(input1, input2));
		setResultHipotenusa(Math.hypot(input1, input2));
		setResultRaiz1(Math.sqrt(input1));
		setResultRaiz2(Math.sqrt(input2));

		if (input1 !== 0 && input2 !== 0) {
			setResultDiv(input1 / input2);
		} else {
			setResultDiv(0);
		}
	}, [input1, input2]);

	const check = (e) => {
		let checkComp = isNaN(e.target.value);
		console.log(e.target.id);
		if (!checkComp) {
			if (e.target.id === 1) {
				setInput1(e.target.value);
			} else {
				setInput2(e.target.value);
			}
		} else {
			document.getElementById(e.target.id).value = "";
			if (e.target.id === 1) {
				setInput1(0);
			} else {
				setInput2(0);
			}
		}
	};

	// const check2 = (e) => {
	// 	let checkComp = isNaN(e.target.value);
	// 	if (!checkComp) {
	// 		setInput2(e.target.value);
	// 	} else {
	// 		document.getElementById(e.target.id).value = "";
	// 		setInput2(0);
	// 	}
	// };

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
