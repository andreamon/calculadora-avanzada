function Input(props) {
  const { id } = props;
  return (
    <div className="main-input">
      <input id={id} onInput={props.checkType} />
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
