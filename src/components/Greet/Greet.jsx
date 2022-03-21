import React from "react";
import "./Greet.css";
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Hello {props.name}</h2>
      <p style={{ color: "orange" }}>I am {props.age} y.o</p>
      <div
        style={{
          border: "3px solid violet",
          width: "300px",
          height: "300px",
          fontSize: "30px",
          margin: "10px auto",
        }}
      >
        Block
      </div>
      <img className="image" src={props.image} alt="" />
      {props.elem}
    </div>
  );
};

export default Greet;
