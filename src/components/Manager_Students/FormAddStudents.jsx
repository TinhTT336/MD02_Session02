import React, { Component } from "react";

export default class FormAddStudents extends Component {
  // khoi tao constructor
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userCode: "",
        userName: "",
        dateOfBirth: "",
        address: "",
        email: "",
        password: "",
      },
    };
  }
  // dong form
  handleCloseForm = () => {
    this.props.handleClose(false);
  };

  // ham lang nghe su thay doi cua cac o input
  handleChangeInput = (e) => {
    const { value, name } = e.target;

    // set lai state
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });

    // this.setState({
    //   userCode: e.target.value,
    //   userName: e.target.value,
    //   dateOfBirth: e.target.value,
    //   address: e.target.value,
    //   email: e.target.value,
    //   password: e.target.value,
    // });
  };

  // ham xu ly gui du lieu
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.user);
    // console.log("Form da duoc gui di");
    // const newUser = {
    //   userCode: this.state.userCode,
    //   userName: this.state.userName,
    //   dateOfBirth: this.state.dateOfBirth,
    //   address: this.state.address,
    //   email: this.state.email,
    //   password: this.state.password,
    // };

    // console.log("newUser===>", newUser);
  };

  render() {
    return (
      <div>
        <>
          {/* Modal add user start */}
          <div className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Thêm mới sinh viên
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={this.handleCloseForm}
                  />
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    {" "}
                    {/*su kien submit form*/}
                    <div className="mb-2">
                      <label htmlFor="studentCode" className="form-label">
                        Mã sinh viên
                      </label>
                      <input
                        name="userCode"
                        type="text"
                        className="form-control"
                        id="studentCode"
                        value={this.userCode}
                        onChange={(e) => {
                          this.handleChangeInput(e);
                        }}
                      />
                      {/* <div className="text-danger">
                        Mã sinh viên không được để trống.
                      </div> */}
                    </div>
                    <div className="mb-2">
                      <label htmlFor="studentName" className="form-label">
                        Tên sinh viên
                      </label>
                      <input
                        name="userName"
                        type="text"
                        className="form-control"
                        id="studentName"
                        value={this.userName}
                        onChange={(e) => {
                          this.handleChangeInput(e);
                        }}
                      />
                      {/* <div className="text-danger">
                        Mã sinh viên không được để trống.
                      </div> */}
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
                      {/* <div className="text-danger">
                        Ngày sinh không được để trống.
                      </div> */}
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

                      {/* <div className="text-danger">Email khong được để trống.</div> */}
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
                      {/* <div className="text-danger">Mật khẩu được để trống.</div> */}
                    </div>
                    <div className="d-flex justify-content-end gap-3">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={this.handleCloseForm}
                      >
                        Hủy
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Lưu
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Modal add user end */}
        </>
      </div>
    );
  }
}
