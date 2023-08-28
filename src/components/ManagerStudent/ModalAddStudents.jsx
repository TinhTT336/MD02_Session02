import React, { Component } from "react";

export default class ModalAddStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {
        studentId: "",
        studentName: "",
        dateOfBirth: "",
        address: "",
        email: "",
        password: "",
      },
    };
  }

  // ham dong form Add
  handleCloseAddForm = () => {
    this.props.handleCloseAdd(false);
  };

  // ham lang nghe su thay doi o cac o input
  handleChangeInput = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    // set lai state
    // this.setState({
    //   student: {
    //     ...this.state.student,
    //     [name]: value,
    //   },
    // });
    this.setState({
      studentId: e.target.value,
      studentName: e.target.value,
      dateOfBirth: e.target.value,
      address: e.target.value,
      email: e.target.value,
      password: e.target.value,
    });
  };
  // ham xu ly gui du lieu
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.student);
  };

  render() {
    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thêm mới sinh viên
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleCloseAddForm}
                />
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="studentCode" className="form-label">
                      Mã sinh viên
                    </label>
                    <input
                      name="studentId"
                      type="text"
                      className="form-control"
                      id="studentCode"
                      value={this.studentId}
                      onChange={(e) => {
                        this.handleChangeInput(e);
                      }}
                    />
                    <div className="text-danger">
                      Mã sinh viên không được để trống.
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="studentName" className="form-label">
                      Tên sinh viên
                    </label>
                    <input
                      name="studentName"
                      type="text"
                      className="form-control"
                      id="studentName"
                      value={this.studentName}
                      onChange={(e) => {
                        this.handleChangeInput(e);
                      }}
                    />
                    <div className="text-danger">
                      Mã sinh viên không được để trống.
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Ngày sinh
                    </label>
                    <input
                      name="dateOfBirth"
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                      value={this.dateOfBirth}
                      onChange={(e) => {
                        this.handleChangeInput(e);
                      }}
                    />
                    <div className="text-danger">
                      Ngày sinh không được để trống.
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      name="address"
                      type="text"
                      className="form-control"
                      id="address"
                      value={this.address}
                      onChange={(e) => {
                        this.handleChangeInput(e);
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      value={this.email}
                      onChange={(e) => {
                        this.handleChangeInput(e);
                      }}
                    />
                    <div className="text-danger">Email được để trống.</div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                      value={this.password}
                      onChange={(e) => {
                        this.handleChangeInput(e);
                      }}
                    />
                    <div className="text-danger">Mật khẩu được để trống.</div>
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={this.handleCloseAddForm}
                    >
                      Hủy
                    </button>
                    <button type="button" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
