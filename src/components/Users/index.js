import React from "react";
import User from "./User";

class Users extends React.Component {
  // this.state тут походу не доступно

  render() {
    const UsersList = this.props.users.map(user => <User key={user.id} user={user} delUser={this.props.delUser} />);

    if (UsersList.length > 0) {
      return  <ul className='users-component'>{ UsersList }</ul>;
    } else {
      return <div>is Empty</div>
    }
  }
}

export default Users;
