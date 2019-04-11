import React from "react";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      display: false
    };
  }
  displayChange() {
    this.setState({ display : ! this.state.display });
    //console.log(this.state.display);
    //this.state.display=!this.state.display;
  }
  render() {
    return (
      <div>
        <h1>Welcome to Home Page</h1>
        <button className="btn btn-primary" onClick={() => this.displayChange()}>Toggle Image</button>
        <br/>
        {this.state.display ? (
          <img src={require("../../src/images/cars.jpg")} width="50%"/>
        ) : (
          <img src={require("../../src/images/images.jpg")} width="50%" />
        )}
       
     
      </div>
    );
  }

  // render() {
  //   return (
  //     // <div>
  //     //   <img src={require("../../src/images/cars.jpg")} width='100%' />
  //     // </div>
  // //     <div className="grid-box">
  // //     {this.state.hover ? (
  // //         <img src= {require("../../src/images/cars.jpg")} />
  // //     ) :null}
  // // </div>

  //   );
  // }
}
export default Home;
