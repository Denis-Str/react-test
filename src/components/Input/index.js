import React from 'react';


class InputComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: 'input text',
      userData: '',
    }

    // Эта привязка обязательна для работы `this` в колбэке.
    this.inputClick = this.inputClick.bind(this);
  }


  inputClick() {
    this.setState({
      helpText: 'change'
    });
    console.log('click');
  }

  render() {
    return (
      <div className='input-component'>
        <h3>{this.state.helpText}</h3>
        <h3>{this.state.userData}</h3>
        <input
          placeholder={this.state.helpText}
          onClick={this.inputClick}
          onChange={event => this.setState({userData: event.target.value})}
        />
        <div>{this.state.helpText === 'input text' ? 1 : 2}</div>
      </div>
    )
  }
}

export default InputComp;
