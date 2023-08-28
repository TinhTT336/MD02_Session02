// import React, { Component } from "react";
// Bước 1: Tạo 1 component gồm 1 đoạn văn bản và 1 nút button.
// Bước 2: Khai báo 1 state để lưu trữ nội dung đoạn văn bản.
// Bước 3: Khai báo hàm để thay đổi nội dung của đoạn văn trước đó thông qua hàm
// setState() và gọi nó khi có sự kiện onClick vào nút button.
// Bước 4: HIển thị giá trị của state tại thẻ đoạn văn p ở phần render để hiển thị ra màn
// hình.

// export default class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: "Noi dung mac dinh",
//     };
//   }
//   handleChange = () => {
//     this.setState({
//       content: "Noi dung da thay doi",
//     });
//   };
//   render() {
//     return (
//       <>
//         <p>{this.state.content}</p>
//         <button onClick={this.handleChange}>Change Content</button>
//       </>
//     );
//   }
// }

// import React, { useState } from "react";

// const App = () => {
//   const [content, setContent] = useState("Nội dung mặc định");

//   const handleChange = () => {
//     setContent("Nội dung đã thay đổi");
//   };

//   return (
//     <div>
//       <p>{content}</p>
//       <button onClick={handleChange}>Thay đổi nội dung</button>
//     </div>
//   );
// };

// export default App;

// Bước 1: Trong component App tạo component Form gồm 1 ô input và 1 nút button .
// Khi người dùng nhập vào ô input và ấn nút button đó thì nội dung sẽ được hiển thị ở 1
// thẻ p bên dưới.
// Bước 2: Tạo 1 state để quản lý nội dung người dùng nhập vào, gắn sự kiện onChange
// vào ô input để cập nhật giá trị của state mối khi người dùng nhập.
// Bước 3: Gắn sự kiện onClick khi người dùng nhấn vào button thì hiển thị nội dung
// ra màn hình.
// import React, { Component } from "react";

// export default class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: "",
//     };
//     this.inputValue = "";
//   }
//   handleChangeInput = (e) => {
//     this.inputValue = e.target.value;
//   };
//   handleClick = (e) => {
//     e.preventDefault();
//     this.setState({
//       content: this.inputValue,
//     });
//   };
//   render() {
//     return (
//       <>
//         <form>
//           <input onChange={this.handleChangeInput} type="text" />
//           <button onClick={this.handleClick}>Show content</button>
//           <p>{this.state.content}</p>
//         </form>
//       </>
//     );
//   }
// }

// import React, { useState } from "react";

// const App = () => {
//   const [content, setContent] = useState("");
//   const Form = () => {
//     const [inputValue, setInputValue] = useState("");
//     const handleInputChange = (e) => {
//       setInputValue(e.target.value);
//     };
//     const handleButtonClick = () => {
//       setContent(inputValue);
//     };
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Nhập nội dung"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleButtonClick}>Hiển thị</button>
//         <p>{content}</p>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Form />
//     </div>
//   );
// };

// export default App;

// Bước 1: Tạo 1 component Table để hiển thị mảng dữ liệu mẫu, ví dụ danh sách của 1
// nhóm các sinh viên.
// Bước 2: Tạo một state để lưu trữ mảng dữ liệu đó, một state để quản lí dữ liệu người
// dùng nhập vào khi thực hiện chức năng tìm kiếm, 1 state để quản lí điều kiện sắp xếp (sắp xếp
// theo trường nào? sắp xếp theo chiều nào , tăng dần hay giảm dần).
// Bước 3: Tạo 1 component Controls chứ 1 form gồm 1 ô input tìm kiếm và 1 ô select
// option để người dùng chọn chiều sắp xếp .
// Bước 4: Thực hiện lọc và sắp xếp dữ liệu dữ trên các state và hiển thị ra table.
// import React, { Component } from "react";

// export default class ListUser extends Component {
//   // khoi tao constructor
//   constructor(props) {
//     super(props);
//     //  khai bao state
//     this.state = {
//       users: [
//         {
//           userId: 1,
//           userName: "Nguyễn Văn A",
//           age: 21,
//           dateOfBirth: "12/12/2001",
//           gender: 1,
//         },
//         {
//           userId: 2,
//           userName: "Trần Thị B",
//           age: 25,
//           dateOfBirth: "05/18/1998",
//           gender: 0,
//         },
//         {
//           userId: 3,
//           userName: "Lê Minh C",
//           age: 30,
//           dateOfBirth: "09/03/1993",
//           gender: 1,
//         },
//         {
//           userId: 4,
//           userName: "Phạm Thanh D",
//           age: 28,
//           dateOfBirth: "11/22/1995",
//           gender: 0,
//         },
//         {
//           userId: 5,
//           userName: "Hoàng Quang E",
//           age: 19,
//           dateOfBirth: "07/10/2004",
//           gender: 1,
//         },
//         {
//           userId: 6,
//           userName: "Ngô Thu F",
//           age: 22,
//           dateOfBirth: "03/29/1999",
//           gender: 0,
//         },
//         {
//           userId: 7,
//           userName: "Vũ Anh G",
//           age: 26,
//           dateOfBirth: "02/15/1997",
//           gender: 1,
//         },
//         {
//           userId: 8,
//           userName: "Đặng Hoài H",
//           age: 31,
//           dateOfBirth: "08/08/1992",
//           gender: 0,
//         },
//         {
//           userId: 9,
//           userName: "Bùi Minh I",
//           age: 24,
//           dateOfBirth: "06/14/1999",
//           gender: 1,
//         },
//         {
//           userId: 10,
//           userName: "Nguyễn Mai J",
//           age: 27,
//           dateOfBirth: "04/03/1996",
//           gender: 0,
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Danh sach User</h1>
//         <div className="d-flex m-5 justify-content-between">
//           <div className="d-flex align-items-center gap-4">
//             {/* <div style={{ width: 263, fontWeight: 600, fontSize: 20 }}>
//               Quản lý sinh viên
//             </div> */}
//             <select className="form-select">
//               <option value="">-- Sắp xếp theo tên --</option>
//               <option value="">Tăng dần</option>
//               <option value="">Giảm dần</option>
//             </select>
//           </div>
//           <div className="d-flex align-items-center gap-4">
//             <input
//               style={{ minWidth: 300 }}
//               type="text"
//               className="form-control"
//               placeholder="Tìm kiếm sinh viên theo tên"
//               value={this.state.userName}
//               onChange={(e) => this.handleChange(e)}
//             />
//             <button
//               style={{ minWidth: 170 }}
//               type="button"
//               className="btn btn-primary"
//               data-bs-toggle="modal"
//               data-bs-target="#exampleModal"
//               onClick={this.handleShowAdd}
//             >
//               Thêm mới sinh viên
//             </button>
//           </div>
//         </div>
//         <table className="table table-striped table-hover table-bordered">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">UserID</th>
//               <th scope="col">UserName</th>
//               <th scope="col">Age</th>
//               <th scope="col">DateOfBirth</th>
//               <th scope="col">Gender</th>
//               <th colSpan="2" scope="col">
//                 Option
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.users.map((user, index) => (
//               <tr key={index}>
//                 <th scope="row">{index + 1}</th>
//                 <td>{user.userId}</td>
//                 <td>{user.userName}</td>
//                 <td>{user.age}</td>
//                 <td>{user.dateOfBirth}</td>
//                 <td>{user.gender === 0 ? "Nam" : "Nữ"}</td>
//                 <td>
//                   <button className="btn btn-warning"> Edit</button>
//                 </td>
//                 <td>
//                   <button className="btn btn-danger">Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
      searchTerm: "",
      sortBy: "name",
      sortDirection: "asc",
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSortChange = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
  };

  handleSortDirectionChange = (e) => {
    this.setState({
      sortDirection: e.target.value,
    });
  };

  filteredData = () => {
    return this.state.data.filter((student) => {
      return student.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });
  };

  sortedData = () => {
    const property = this.state.sortBy;
    const direction = this.state.sortDirection === "asc" ? 1 : -1;

    switch (property) {
      case "name":
        return this.filteredData().sort((a, b) => {
          return direction * a.name.localeCompare(b.name);
        });
      case "email":
        return this.filteredData().sort((a, b) => {
          return direction * a.email.localeCompare(b.email);
        });
      case "address":
        return this.filteredData().sort((a, b) => {
          return direction * a.address.localeCompare(b.address);
        });
      default:
        return this.filteredData().sort((a, b) => {
          return direction * a.id - b.id;
        });
    }
  };

  render() {
    return (
      <div>
        <Controls />
        <TableBody data={this.sortedData()} />
      </div>
    );
  }
}

const students = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    address: "123 Main Street, Anytown, CA 91234",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
    address: "456 Elm Street, Anytown, CA 91234",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bobsmith@example.com",
    address: "789 Oak Street, Anytown, CA 91234",
  },
];

export default Table;
