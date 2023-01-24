import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    const { firstName, bio } = this.state.user
    return (
      <li>
        <h4>{firstName}</h4>
        <div>{bio}</div>
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
