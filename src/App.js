import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Welcome from "./Components/welcome";
// import FuncComp from "./Components/functionalcomponentdemo";
// import Greeting from "./Components/Greetings";
// import GreetingClassComponent from "./Components/Greetingsclasscomp";
// import NumListClassComp from "./Components/NumberList_Classcomp";
// import EventDemo1 from "./Components/event1demo";
// import UserList from "./Components/userlist";
// import Eventprops from "./Components/eventprops";
// import Statedemo1 from "./Components/statedemo";
// import Counter from "./Components/counter";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Header from "./Components/Header";
import Forms from "./Components/form";
import FormEg from "./Components/formegdemo1";
import FormDemo from "./Components/formdemo2";
import RefDemo1 from "./Components/RefsDemo";
import CustomerInfo from "./Components/customer-info";
import LifecycleA from "./Components/lifeCycleA";
import Contact from "./Components/contact";

class App extends Component {
  render() {
    // let numbers = [1, 2, 3, 4, 5]; //for mapping in component using props
    // let user = {
    //   name: "Sangmesh",
    //   hobbies: ["Sports", "Swimming", "Music", "Watching Movies", "Shopping"]
    // };

    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/about" component={About} />
              <Route exact path="/form" component={Forms} />
              <Route exact path="/formeg" component={FormEg} />
              <Route exact path="/formdemo" component={FormDemo} />
              <Route exact path="/refdemo" component={RefDemo1} />
              <Route exact path="/AddDelete" component={CustomerInfo} />
              <Route exact path="/LifecycleA" component={LifecycleA} />
              <Route exact path="/Contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>

      // <BrowserRouter>
      //   <div>
      //     <ul>
      //       <li>
      //         <Link to="/">Home</Link>
      //       </li>
      //       <li>
      //         <Link to="/">About</Link>
      //       </li>

      //     </ul>
      //     <hr/>
      //     <div>
      //       <Switch>
      //         <Route exact path="/" Component={Home}></Route>
      //         <Route path="/about" Component={About}></Route>
      //       </Switch>
      //     </div>
      //   </div>
      // </BrowserRouter>

      //-------day 2----------

      // // <div className="container">
      // //   <div className="row">
      // //     <div className="col-xs-12">
      //       {/* <Greeting name="Sangmesh" />
      //       <Greeting name="Amruth" />
      //       <hr/>
      //       <GreetingClassComponent name="Sangu" />
      //       <hr/>
      //       <NumListClassComp numbers={numbers} />
      //       <hr/>
      //       <UserList user={user}>Hello Beta</UserList>
      //       <hr/>
      //       <EventDemo1 />
      //       <hr/>
      //       <Eventprops age={32} />*/}
      //       {/* <Statedemo1 message="Welcome Guest"/>
      //       <Counter/>
      //     </div>
      //   </div>
      // </div> */}

      // // <div>------day1
      // //   <h1>Hello Welcome to my app</h1>
      // //   <Welcome/>
      // //   <FuncComp/>
      // // </div>
      // //----------day1-------- React.createElement('h1',null,'HelloWorld')
      // // React.cloneElement('div',{className:app},'HelloWorld')
    );
  }
}

export default App;
