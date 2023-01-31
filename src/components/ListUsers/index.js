import React from "react";
// import users from "../../mock/users";
import Users from "../Users";
import Form from "../Form";
import axios from "axios";

const baseURL = 'https://reqres.in/api/users?page=1';


export default class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };



    this.addUser = this.addUser.bind(this);
    this.delUser = this.delUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  async componentDidMount() {
    const { data: { data } } = await axios.get(baseURL);
    this.setState({users: data })
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
      <div className='top'>
        <h2 className='title'>Список пользователей</h2>
        <div className='wrap'>
          <Users users={this.state.users} editUser={this.editUser} delUser={this.delUser}/>
          <Form addUser={this.addUser}/>
        </div>
      </div>
    )
  }
}
