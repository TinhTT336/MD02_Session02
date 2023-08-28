import React, { Component } from "react";
import FormDeleteStudents from "./FormDeleteStudents";
import FormEditStudents from "./FormEditStudents";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelete: false,
      showEdit: false,
      students: [
        {
          studentID: "NV001",
          studentName: "Nguyễn Văn A",
          dateOfBirth: "12/12/2001",
          address: "Hà Nội",
          email: "nguyenvana@gmail.com",
          password: 123456,
        },
        {
          studentID: "NV002",
          studentName: "Lê Thị B",
          dateOfBirth: "01/01/2002",
          address: "Đà Nẵng",
          email: "lethibi@gmail.com",
          password: 789101,
        },
        {
          studentID: "NV003",
          studentName: "Trần Văn C",
          dateOfBirth: "20/02/2003",
          address: "Hồ Chí Minh",
          email: "tranvanc@gmail.com",
          password: 234567,
        },
        {
          studentID: "NV004",
          studentName: "Hoàng Thị D",
          dateOfBirth: "05/04/2004",
          address: "Bắc Ninh",
          email: "hoangthid@gmail.com",
          password: 345678,
        },
        {
          studentID: "NV005",
          studentName: "Phan Văn E",
          dateOfBirth: "10/06/2005",
          address: "Hải Phòng",
          email: "phanvane@gmail.com",
          password: 456789,
        },
        {
          studentID: "NV006",
          studentName: "Đỗ Thị F",
          dateOfBirth: "15/08/2006",
          address: "Thanh Hóa",
          email: "dothif@gmail.com",
          password: 567890,
        },
        {
          studentID: "NV007",
          studentName: "Nguyễn Thị G",
          dateOfBirth: "20/10/2007",
          address: "Nghệ An",
          email: "nguyenthig@gmail.com",
          password: 678901,
        },
        {
          studentID: "NV008",
          studentName: "Phạm Thị H",
          dateOfBirth: "25/12/2008",
          address: "Quảng Bình",
          email: "phamthih@gmail.com",
          password: 789012,
        },
        {
          studentID: "NV009",
          studentName: "Thái Thị I",
          dateOfBirth: "01/02/2009",
          address: "Quảng Trị",
          email: "thaithii@gmail.com",
          password: 890123,
        },
        {
          studentID: "NV010",
          studentName: "Thái Thị K",
          dateOfBirth: "01/02/2009",
          address: "Quảng Trị",
          email: "thaithik@gmail.com",
          password: 890145,
        },
      ],
    };
  }

  // show form xoa
  handleShowDelete = () => {
    this.setState({
      showDelete: true,
    });
  };

  // dong form xoa
  handleCloseDelete = (status) => {
    this.setState({
      showDelete: status,
    });
  };

  // show form sua
  handleShowEdit = () => {
    this.setState({
      showEdit: true,
    });
  };

  // dong form sua
  handleCloseEdit = () => {
    this.setState({
      showEdit: false,
    });
  };

  render() {
    return (
      <>
        {/* form deleteStudents */}
        {this.state.showDelete === true ? (
          <FormDeleteStudents handleCloseDelete={this.handleCloseDelete} />
        ) : (
          <></>
        )}

        {/* form editStudents */}
        {this.state.showEdit === true ? (
          <FormEditStudents handleCloseEdit={this.handleCloseEdit} />
        ) : (
          <></>
        )}

        <div className="m-5">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">Mã</th>
                <th scope="col">Tên sinh viên</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Email</th>
                <th scope="col">Mật khẩu</th>
                <th className="text-center" colSpan={2} scope="col">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student, index) => (
                <tr key={index}>
                  <td>{student.studentID}</td>
                  <td>{student.studentName}</td>
                  <td>{student.dateOfBirth}</td>
                  <td>{student.address}</td>
                  <td>{student.email}</td>
                  <td>{student.password}</td>
                  <td>
                    <i
                      data-bs-toggle="modal"
                      data-bs-target="#updateStudent"
                      className="fa-solid fa-pen-to-square text-warning"
                      onClick={this.handleShowEdit}
                    />
                  </td>
                  <td>
                    <i
                      data-bs-toggle="modal"
                      data-bs-target="#confirmDelete"
                      className="fa-solid fa-trash text-danger"
                      onClick={this.handleShowDelete}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
