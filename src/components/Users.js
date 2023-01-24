import React from "react";
import users from "../mock/users";
import User from "./User";

class Users extends React.Component {
  UsersList = users.map(user => <User key={user.id} user={user} />);

    render() {
    const { length } = this.UsersList;
    if (length > 0) {
      return  <ul>{ this.UsersList }</ul>;
    } else {
      return <div>is Empty</div>
    }
  }
}

export default Users;
