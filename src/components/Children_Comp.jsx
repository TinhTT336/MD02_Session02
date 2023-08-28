import React from "react";

export default function Children_Comp(props) {
  console.log("Tham so cua Children: ", props.userName, props.age);
  return <div>UserName cua Children: {props.userName}</div>;
}
