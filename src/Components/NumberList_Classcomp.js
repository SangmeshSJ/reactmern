import React from "react";
class NumListClassComp extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li></li>
                <li></li>
                <li></li>
                <li></li> */}
          {this.props.numbers.map(n => (
            <li> {n}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default NumListClassComp;
