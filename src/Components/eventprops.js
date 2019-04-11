import React from "react";
class Eventprops extends React.Component {
  updateage() {
    this.age = this.props.age;
    console.log("Before updating" + this.props.age);
    this.age = this.age + 5;
    console.log("After Update" + this.age);
  }
  render() {
    return (
      <div>
        <h1>{this.props.age}</h1>
        <button onClick={() => this.updateage()}>UpdateAge</button>
      </div>
    );
  }
}
export default Eventprops;
