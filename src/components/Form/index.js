import React from "react";

const initState = {
  first_name: '',
  last_name: '',
  email: '',
  // isHappy: false
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
    let sendData = this.state.user;
    if (this.props.user) sendData = {...sendData, id: this.props.user.id}
    this.props.addUser(sendData);
    this.form.reset();
    this.setState({user: initState});
  }

  render() {
    return(
      <form ref={el => this.form = el} className='form-component'>
        <input placeholder='Имя' onChange={e => this.setState(prevState => ({user: {...prevState.user, first_name: e.target.value}}))}/>
        <input placeholder='Фамилия' onChange={e => this.setState(prevState => ({user: {...prevState.user, last_name: e.target.value}}))}/>
        <input placeholder='email' onChange={e => this.setState(prevState => ({user: {...prevState.user, email: e.target.value}}))}/>
        {/*<div className='field'>*/}
        {/*  <label htmlFor='isHappy'>Состояние</label>*/}
        {/*  <input type='checkbox' id='isHappy' onChange={e => this.setState(prevState => ({user: {...prevState.user, isHappy: e.target.checked}}))}/>*/}
        {/*</div>*/}
        <button type='button' onClick={this.handleSubmit}>Добавить</button>
      </form>
    )
  }
}

export default Form;
