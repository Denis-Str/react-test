import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      bio: '',
      age: null,
      isHappy: false
    }

    this.handleSetFirstName = this.handleSetFirstName.bind(this);
    this.handleSetLastName = this.handleSetLastName.bind(this);
    this.handleSetBio = this.handleSetBio.bind(this);
    this.handleSetBio = this.handleSetBio.bind(this);
    this.handleSetAge = this.handleSetAge.bind(this);
    this.handleSetIsHappy = this.handleSetIsHappy.bind(this);
    this.addUser = this.addUser.bind(this);

  }

  handleSetFirstName(e) {
    this.setState({firstName: e.target.value})
  }
  handleSetLastName(e) {
    this.setState({lastName: e.target.value})
  }
  handleSetBio(e) {
    this.setState({bio: e.target.value})
  }
  handleSetAge(e) {
    this.setState({age: e.target.value})
  }
  handleSetIsHappy(e) {
    this.setState({isHappy: e.target.checked})
  }
  addUser(e) {
    console.log('click')
  }


  render() {
    return(
      <form className='form-component'>
        <input placeholder='Имя' onChange={this.handleSetFirstName}/>
        <input placeholder='Фамилия' onChange={this.handleSetLastName} />
        <textarea placeholder='Биография' onChange={this.handleSetBio}/>
        <input placeholder='Возраст' onChange={this.handleSetAge} />
        <div className='field'>
          <label htmlFor='isHappy'>Состояние</label>
          <input type='checkbox' id='isHappy' onChange={this.handleSetIsHappy}/>
        </div>
        <button type='button' onClick={this.addUser}>Добавить</button>
      </form>
    )
  }
}

export default Form;
