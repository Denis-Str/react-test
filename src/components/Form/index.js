import React from "react";

class Form extends React.Component {
  render() {
    return(
      <form className='form-component'>
        <input placeholder='Имя'/>
        <input placeholder='Фамилия'/>
        <textarea placeholder='Биография'/>
        <input placeholder='Возраст'/>
        <div className='field'>
          <label htmlFor='isHappy'>Состояние</label>
          <input type='checkbox' id='isHappy'/>
        </div>
        <button type='button'>Добавить</button>
      </form>
    )
  }
}

export default Form;
