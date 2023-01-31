import React from "react";
import Form from "../../Form";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // надо ли пропсы записывать в состояние?! вот в чем вопрос
      user: props.user,
      showEditForm: false,
    };
  }

  render() {
    const { id, first_name, last_name, avatar, isHappy, email } = this.state.user
    return (
      <li className='user-component'>
        <div className='content'>
          <div>
            <h4>{first_name} - {last_name}</h4>
            <div>{email}</div>
            <img src={avatar} alt={first_name} />
            <div>{isHappy ? ':)' : ':('}</div>
          </div>
          <div>
            <IoHammerSharp onClick={() => this.setState({showEditForm: !this.state.showEditForm})} className='edit' />
            <IoCloseCircleSharp onClick={() => this.props.delUser(id)} />
          </div>
        </div>
        {this.state.showEditForm && <Form user={this.state.user} addUser={this.props.editUser} />}
      </li>
    )
  }
}

export default User;


// const User = (props) => {
//   const { first_name, bio } = props.user
//   return (
//     <li>
//       <h4>{first_name}</h4>
//       <div>{bio}</div>
//     </li>
//   )
// }
//
// export default User;
