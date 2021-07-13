import { useState } from "react";

function Input() {
  const [inputVal, setInputVal] = useState(0);
  function reset() {
    setInputVal(0);
  }
  function seeResult(e) {
    console.log(e.target.value);
  }
  return (
    <>
      <input onChange={seeResult} type="number" defaultValue={inputVal} />
      <button onClick={reset}>Clear</button>
    </>
  );
}

export default Input;
