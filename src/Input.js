// import { useState } from "react";
function Input(props) {
	// const [inputComponent, setInputComponent] = useState(0);
	const { id } = props;

	// const clear = () => {
	// 	document.getElementById(id).value = 0;
	// 	setInputComponent(0);
	// };

	// const checkTest = (e) => {
	// 	let checkComp = isNaN(e.target.value);
	// 	console.log(checkComp);
	// 	console.log(e.target.id);
	// 	let inputId = e.target.id;
	// 	if (!checkComp) {
	// 		setInputComponent(e.target.value);
	// 	} else {
	// 		document.getElementById(inputId).value = "";
	// 		setInputComponent(0);
	// 	}
	// };

	return (
		<div className="main-input">
			<input id={id} onChange={props.checkType} />
			<button
				onClick={() => {
					props.clear(id);
				}}
			>
				Clear
			</button>
		</div>
	);
}

export default Input;
