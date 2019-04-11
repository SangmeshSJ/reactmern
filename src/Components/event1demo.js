import React from "react";

class EventDemo1 extends React.Component {
  callEvent() {
    console.log("I am an Event");
  }
  render() {
    return <button onClick={() => this.callEvent()}>EventClickMe</button>;
  }
}

export default EventDemo1;
