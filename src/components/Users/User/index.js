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
    const { firstName, bio } = this.state.user
    return (
      <li className='user-component'>
        <div>
          <h4>{firstName}</h4>
          <div>{bio}</div>
        </div>
        <div>
          <IoHammerSharp className='edit' />
          <IoCloseCircleSharp />
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
