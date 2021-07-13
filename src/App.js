import { useEffect, useState } from "react";
import "./App.css";
// import Input from "./Input";

function App() {
	const [resultSum, setResultSum] = useState();
	const [resultResta, setResultResta] = useState();
	const [inputVal, setInputVal] = useState(0);
	const [inputVal2, setInputVal2] = useState(0);

	useEffect(() => {
		setResultSum(Number(inputVal) + Number(inputVal2));
		setResultResta(Number(inputVal) - Number(inputVal2));
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
		console.log(check);
		if (!check) {
			setInputVal(e.target.value);
		} else {
			alert("Sólo se permiten números");
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
					<input
						id="secValue"
						onChange={(e) => setInputVal2(e.target.value)}
						type="text"
					/>
					<button onClick={reset2}>Clear</button>
				</div>
				<p>Resultado de Sumar {resultSum ? resultSum : "0"}</p>
				<p>Resultado de Restar {resultResta ? resultResta : "0"}</p>
			</div>
		</>
	);
}

export default App;
