import React, { Component } from "react";
export default class Children_Class_Comp extends Component {
  // ham handleClick
  handleClick = () => {
    this.props.handleChangeName("Rose");
  };
  render() {
    return (
      <>
        <div>UserName o Children_Class_Comp: {this.props.userName}</div>
        <button onClick={this.handleClick}>Change Props</button>
      </>
    );
  }
}
