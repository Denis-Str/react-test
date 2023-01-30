import React from "react";

const initState = {
  firstName: '',
  lastName: '',
  bio: '',
  age: null,
  isHappy: false
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: initState
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.form.reset();
    this.setState({user: initState});
    this.props.addUser(this.state.user);
  }

  render() {
    return(
      <form ref={el => this.form = el} className='form-component'>
        <input placeholder='Имя' onChange={e => this.setState(prevState => ({user: {...prevState.user, firstName: e.target.value}}))}/>
        <input placeholder='Фамилия' onChange={e => this.setState(prevState => ({user: {...prevState.user, lastName: e.target.value}}))}/>
        <textarea placeholder='Биография' onChange={e => this.setState(prevState => ({user: {...prevState.user, bio: e.target.value}}))}/>
        <input placeholder='Возраст' onChange={e => this.setState(prevState => ({user: {...prevState.user, age: e.target.value}}))}/>
        <div className='field'>
          <label htmlFor='isHappy'>Состояние</label>
          <input type='checkbox' id='isHappy' onChange={e => this.setState(prevState => ({user: {...prevState.user, isHappy: e.target.checked}}))}/>
        </div>
        <button type='button' onClick={this.handleSubmit}>Добавить</button>
      </form>
    )
  }
}

export default Form;
