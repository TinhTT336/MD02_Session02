import React, { Component } from "react";
import ModalAddStudents from "./ModalAddStudents";

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: false,
    };
  }
  // ham show form Add
  handleShowAdd = () => {
    this.setState({
      showAdd: true,
      userName: "",
    });
  };

  // ham tat form Add
  handleCloseAdd = (status) => {
    this.setState({
      showAdd: status,
    });
  };

  // ham lang nghe su thay doi trong o input
  handleChange = (e) => {
    console.log(e.target.value);
    // set lai state
    this.setState({
      userName: e.target.value,
    });
  };

  render() {
    return (
      <>
        {this.state.showAdd === true ? (
          <ModalAddStudents handleCloseAdd={this.handleCloseAdd} />
        ) : (
          <></>
        )}
        <div className="d-flex m-5 justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <div style={{ width: 263, fontWeight: 600, fontSize: 20 }}>
              Quản lý sinh viên
            </div>
            <select className="form-select">
              <option value="">-- Sắp xếp theo tên --</option>
              <option value="">Tăng dần</option>
              <option value="">Giảm dần</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-4">
            <input
              style={{ minWidth: 300 }}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm sinh viên theo tên"
              value={this.state.userName}
              onChange={(e) => this.handleChange(e)}
            />
            <button
              style={{ minWidth: 170 }}
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={this.handleShowAdd}
            >
              Thêm mới sinh viên
            </button>
          </div>
        </div>
      </>
    );
  }
}
