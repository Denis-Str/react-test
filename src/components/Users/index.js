import React from "react";
import users from "../../mock/users";
import User from "./User";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users
    };
  }
  // this.state тут походу не доступно

  render() {
    const UsersList = this.state.users.map(user => <User key={user.id} user={user} />);

  if (UsersList.length > 0) {
    return  <ul className='users-component'>{ UsersList }</ul>;
  } else {
    return <div>is Empty</div>
  }
}
}

export default Users;
