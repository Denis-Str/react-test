import React from "react";
import './styles/index.css';

// import Welcome from "./components/archive/Welcome";
// import Input from "./components/archive/Input";
// import Toggle from "./components/archive/Toggle";
// import Clock from "./components/archive/Clock";
// import Button from "./components/archive/Button";
import Users from "./components/Users";
import Form from "./components/Form";
import Calculator from "./components/Calculator";

import users from "./mock/users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users
    };

    this.addUser = this.addUser.bind(this);
    this.delUser = this.delUser.bind(this);
  }
  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({users: [...this.state.users, {id, ...user}]})
  };

  delUser(userID) {
    const filteredUsers = this.state.users.filter(({id}) => id !== userID);
    this.setState({users: filteredUsers})
  };

  render() {
    return (
      <div className='app-component'>
        <header>
          <h1 className='title'>Список пользователей</h1>
        </header>
        <main>
          <div className='top'>
            <Users users={this.state.users} delUser={this.delUser}/>
            <Form addUser={this.addUser}/>
          </div>
          <div>
            <h4>Всплытие</h4>
            <Calculator/>
          </div>
        </main>
        {/*<Welcome name='Alica' />*/}
        {/*<Input />*/}
        {/*<Toggle />*/}
        {/*<Clock />*/}
        {/*<Button text='button' />*/}
      </div>
    )
  };
}

export default App;
