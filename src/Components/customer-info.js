import React from "react";

import CustomerDisplay from "./customerdisplay";

class CustomerInfo extends React.Component {
  
    constructor() {
    super();
    //step1----Set State
    this.state = {
      user: {
        userName: "",
        userEmail: "",
        userMobile: "",
        userAddress: "",
        userDescription: "",
        userDateofVisit: ""
      },
      display:false //user end
    }; //state end
  } //constructor end
  
  //step4-----define an event method
  handleSubmit(e) {
      e.preventDefault();
      alert(`${this.state.user.userName}
      ${this.state.user.userEmail}
      ${this.state.user.userMobile}
      ${this.state.user.userAddress}
      ${this.state.user.userDescription}
      ${this.state.user.userDateofVisit}
      `)
      this.setState({display:true})
          
  }

  updateState(ctrl,value){
    const {user} = this.state //get the current state
    user [ctrl]=value;//update the user entered details 
    this.setState({user});//update the new 
  }

  resetState(){
    this.setState( {
        user: {
          userName: "",
          userEmail: "",
          userMobile: "",
          userAddress: "",
          userDescription: "",
          userDateofVisit: ""
        },
        display:false//user end
      }); //state end
  }

  render() {
    
    const { user } = this.state;
    
    return (
      
      <div>
        <h1>State Add and Delete</h1>
        {/*Step3-----Define an event OnSubmit and call an method */}
        <form onSubmit={e => this.handleSubmit(e)}>
          
          <label>UserName</label>
          {/* Step2----Setting the value of each field using value attribute */}
          {/* //this.state.user.userName */}
          <input type="text" value={user.userName} 
            onChange={(e)=>this.updateState('userName',e.currentTarget.value)} required/>
          <br />
          
          <label>Email</label>
          <input type="text" value={user.userEmail} 
            onChange={(e)=>this.updateState('userEmail',e.currentTarget.value)}/>
          <br />
          
          <label>Mobile</label>
          <input type="text" value={user.userMobile} 
            onChange={(e)=>this.updateState('userMobile',e.currentTarget.value)}/>
          <br />
          
          <label>Address</label>
          <input type="text" value={user.userAddress}
             onChange={(e)=>this.updateState('userAddress',e.currentTarget.value)}/>
          <br />
          
          <label>Description</label>
          <input type="text" value={user.userDescription}
             onChange={(e)=>this.updateState('userDescription',e.currentTarget.value)} />
          <br />
          
          <label>User Date of Visit</label>
          <input type="text" value={user.userDateofVisit}
             onChange={(e)=>this.updateState('userDateofVisit',e.currentTarget.value)}/>
          <br />
          
          <button type="submit">Submit</button>
          <br />
        </form>

        {/* Calling the Child class by passing props*/}
        {this.state.display ?
            <CustomerDisplay deleteCustomer={(e)=>this.resetState()}
                userData ={this.state.user}/>:
            null
        }

      </div>

    );
  }
}
export default CustomerInfo;
