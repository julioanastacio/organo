import './InputText.css';

const InputText = (props) => {
  const onDigit = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className='input-text'>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onDigit}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputText;
