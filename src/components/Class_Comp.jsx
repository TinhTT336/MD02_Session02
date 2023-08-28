// import React, { Component } from "react";

// export default class Class_Comp extends Component {
//   // khai bao constructor=> ham khoi tao/ ban thiet ke cua 1 doi tuong
//   constructor(props) {
//     super(props); //super duoc su dung de ke thua lai tat ca cac phuong thuc va thuoc tinh cua lop cha
//     // khai bao state
//     this.state = {
//       // danh sach cac state muon khai bao
//       company: "Rikkei Academy",
//     };
//   }

//   // ham handleClick
//   handleClick = (e) => {
//     console.log(("event", e));
//     //   cap nhat lai state
//     this.setState({
//       company: "ABC",
//     });
//   };
//   render() {
//     return (
//       <>
//         <div>Tên Công ty: {this.state.company}</div>
//         <button onClick={this.handleClick}>Change State</button>
//         {/* <button onClick={(e) => this.handleClick(e)}>Change State</button> */}
//       </>
//     );
//   }
// }

// co 1 nut button voi title la show, khi click vao thi hien thi la an, khi click lan nua thi hien thi la hien
// tao ra 1 state title co gia tri la hien
// viet 1 ham de set lai state

import React, { Component } from "react";
import Children_Class_Comp from "./Children_Class_Comp";

export default class Class_Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "ABC",
      status: true,
      userName: "David",
    };
  }

  handleClick = () => {
    this.setState({
      company: "ABCD",
    });
  };

  handleStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  // Ham cap nhat lai state userName
  handleChangeName = (name) => {
    // console.log("Da nhan", name);
    //   cap nhat lai state
    this.setState({
      userName: name,
    });
  };

  render() {
    return (
      <>
        <div>Tên Công ty: {this.state.company}</div>
        <button onClick={this.handleClick}>Change State</button>
        <button onClick={this.handleStatus}>
          {this.state.status ? "Hien" : "An"}
        </button>
        {/* goi den component con  */}
        <h1>UserName ben trong Class_Comp: {this.state.userName}</h1>
        <Children_Class_Comp
          userName={this.state.userName}
          handleChangeName={this.handleChangeName}
        />
      </>
    );
  }
}
