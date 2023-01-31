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
    this.editUser = this.editUser.bind(this);
  }
  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({users: [...this.state.users, {id, ...user}]})
  };

  delUser(userID) {
    const filteredUsers = this.state.users.filter(({id}) => id !== userID);
    this.setState({users: filteredUsers})
  };

  editUser(user) {
    let users = this.state.users;
    let editUserIndex = this.state.users.findIndex(({id}) => id === user.id);
    users[editUserIndex] = user
    this.setState({users: []}, () => this.setState({users: [...users]}))
  };

  render() {
    return (
      <div className='app-component'>
        <header>
          <h1 className='title'>React JS</h1>
        </header>
        <main>
          <div className='top'>
            <h2 className='title'>Список пользователей</h2>
            <div className='wrap'>
              <Users users={this.state.users} editUser={this.editUser} delUser={this.delUser}/>
              <Form addUser={this.addUser}/>
            </div>
          </div>
          <div>
            <h2 className='title'>Всплытие</h2>
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
