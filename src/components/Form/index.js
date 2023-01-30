import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        bio: '',
        age: null,
        isHappy: false
      }
    }
  }

  render() {
    return(
      <form className='form-component'>
        <input placeholder='Имя' onChange={e => this.setState(prevState => ({user: {...prevState.user, firstName: e.target.value}}))}/>
        <input placeholder='Фамилия' onChange={e => this.setState(prevState => ({user: {...prevState.user, lastName: e.target.value}}))}/>
        <textarea placeholder='Биография' onChange={e => this.setState(prevState => ({user: {...prevState.user, bio: e.target.value}}))}/>
        <input placeholder='Возраст' onChange={e => this.setState(prevState => ({user: {...prevState.user, age: e.target.value}}))}/>
        <div className='field'>
          <label htmlFor='isHappy'>Состояние</label>
          <input type='checkbox' id='isHappy' onChange={e => this.setState(prevState => ({user: {...prevState.user, isHappy: e.target.checked}}))}/>
        </div>
        <button type='button' onClick={() => this.props.addUser(this.state.user)}>Добавить</button>
      </form>
    )
  }
}

export default Form;
