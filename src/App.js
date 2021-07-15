import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Input";
import Output from "./Output";

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
			{ type: "División", res: resultDiv ? resultDiv : "0" },
			{ type: "Potencia", res: Math.pow(input1, input2) },
			{ type: "Hipotenusa", res: Math.hypot(input1, input2) },
			{ type: "Raiz cuadrada 1er valor", res: Math.sqrt(input1) },
			{ type: "Raiz cuadrada 2do valor", res: Math.sqrt(input2) },
		]);
	}, [input1, input2, resultDiv]);

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
				<Output listRes={list} setListRes={setList} />
			</div>
		</>
	);
}

export default App;
