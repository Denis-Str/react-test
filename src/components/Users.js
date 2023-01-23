import React from "react";
import User from "./User";

class Users extends React.Component {
  users = [
    {
      id: 1,
      firstName: 'Bob',
      lastName: 'Marly',
      bio: 'Random text',
      age: 40,
      isHappy: true
    },
    {
      id: 2,
      firstName: 'Terminator',
      lastName: 'T 1000',
      bio: 'Random text',
      age: 22,
      isHappy: false
    }
  ]

  UsersList = this.users.map(user => <User key={user.id} user={user} />)

    render() {
      return (
        <ul>{ this.UsersList }</ul>
      )
  }

}

export default Users;
