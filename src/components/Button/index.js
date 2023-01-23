import { useState, useEffect } from "react";

const Button = (props) => {
  const [value, setValue] = useState(0);
  let [newValue, setNewValue] = useState(0);

  // типа вотчер
  useEffect(() => setNewValue(value * 2))

  return (
    <div>
      <div>{ newValue }</div>
      <button onClick={() => setValue(value + 1)}>{ props.text } { value }</button>
    </div>
  )
}

Button.defaultProps = {
  text: 'default Button'
}

export default Button;
