import React, { Component } from "react";
import Header from "./Header";
// import FormAddStudents from "./FormAddStudents";
import Toolbar from "./Toolbar";
import FormDeleteStudents from "./FormDeleteStudents";
import Message from "./Message";
import FormEditStudents from "./FormEditStudents";
import Table from "./Table";
// import ListStudents from "./ListStudents";

export default class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Toolbar />
        {/* <FormDeleteStudents /> */}
        {/* <FormAddStudents /> */}
        <Message />
        {/* <FormEditStudents /> */}
        <Table />
        {/* <ListStudents /> */}
      </>
    );
  }
}
