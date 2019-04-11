import React from "react";
class Statedemo1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message
    };
  }
  changeMessage() {
    this.setState({
      message: "Thanks for Visiting"
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>ChangeState</button>
      </div>
    );
  }
}
export default Statedemo1;
