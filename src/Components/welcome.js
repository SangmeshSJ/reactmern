import React, { Component } from "react";

//it is a class component

class Welcome extends Component {
  render() {
    let message = "";
    if (true) {
      message = "Hello Friends";
    }
    return (
      //expressions
      <div>
        <h1>Hello from Welcome Component</h1>
        <p>{2 + 2}</p>
        <p>{message}</p>
        <button className="btn btn-primary">Click</button>
      </div>
    );
  }
}
export default Welcome;
