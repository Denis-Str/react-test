import React from "react";

// class User extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     user: {}
//   //   };
//   // }
//
//   render() {
//     return (
//       // <li>23423423</li>
//       <li>{this.props.value}</li>
//     )
//   }
// }
//
// export default User;


const User = (props) => {
  // const user = props.user
  // return  <li key={user.id.toString()}>{props}</li>;
  return  <li>{props.user.id}</li>;
}

export default User;
