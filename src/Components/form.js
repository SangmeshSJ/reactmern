import React from "react";
class Forms extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      firstname:'',
      lastname:'',
      topic:'Angular'
    }
  }
handleSubmit=(event)=>
{
  alert(`${this.state.firstname} ${this.state.lastname} ${this.state.topic}`)
console.log(this.state.firstname)
console.log(this.state.lastname)
console.log(this.state.topic)
event.preventDefault();
}

handlechangefirstname=(event)=>{
  this.setState({
    firstname:event.target.value
  })
}

handlechangelastname=(event)=>{
  this.setState({
    lastname:event.target.value
  })
}

handlechangetopic=(event)=>{
  this.setState({
    topic:event.target.value
  })
}
  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name: </label>
            <input type="text" value={this.state.firstname} onChange={this.handlechangefirstname} />
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" value={this.state.lastname} onChange={this.handlechangelastname} />
          </div>
          <div>
            <label>Topic : </label>
            <select value={this.state.topic}  onChange= {this.handlechangetopic}>
              <option value="Angular">Angular</option>
              <option value="Node">Node</option>
              <option value="React">React</option>
              </select>
          </div>

          <button type="submit"> Submit </button>
        </form>
        </div> 
    );
  }
}
export default Forms;