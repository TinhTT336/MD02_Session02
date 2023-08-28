import React, { Component } from "react";
import Header from "./Header";
import Toolbar from "./Toolbar";
// import ModalAddStudents from "./ModalAddStudents";
import Table from "./Table";

export default class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Toolbar />
        {/* <ModalAddStudents /> */}
        <Table />
      </>
    );
  }
}
