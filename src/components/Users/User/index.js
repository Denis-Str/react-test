import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // надо ли пропсы записывать в состояние?! вот в чем вопрос
      user: props.user
    };
  }

  render() {
    // const { firstName, bio } = this.props.user
    const { id, firstName, bio, isHappy, age } = this.state.user
    return (
      <li className='user-component'>
        <div>
          <h4>{firstName} - {age} лет</h4>
          <div>{bio}</div>
          <div>{isHappy ? ':)' : ':('}</div>
        </div>
        <div>
          <IoHammerSharp className='edit' />
          <IoCloseCircleSharp onClick={() => this.props.delUser(id)} />
        </div>
      </li>
    )
  }
}

export default User;


// const User = (props) => {
//   const { firstName, bio } = props.user
//   return (
//     <li>
//       <h4>{firstName}</h4>
//       <div>{bio}</div>
//     </li>
//   )
// }
//
// export default User;
