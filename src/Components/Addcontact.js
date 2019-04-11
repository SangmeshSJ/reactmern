import React from "react"; 

class AddContact extends React.Component {
  //step 1 create two variables
  contactname = React.createRef();
  contactnumber = React.createRef();

  handleAddContact = (event) => {
    let contObject = {
      contactname: this.contactname.current.value,
      contactnumber: this.contactnumber.current.value
    }; 
    if(this.contactname !==''||this.contactnumber!=='')
        this.props.addContacts(contObject);
    else
    alert('Please enter the details')
  };
  render() {
    return (
      <div>
        <h1> Add Contact </h1>

        <form>
          <div>
            <label>Contact Name: </label>
            {/* step-2 -->attach the ref variable to input fields */}
            <input type="text" ref={this.contactname} />
          </div>
          <div>
            <label>Contact Number: </label>
            <input type="text" ref={this.contactnumber} />
          </div>
          <button className="btn btn-success" onClick={this.handleAddContact}> AddNewContact </button>
        </form>
      </div>
    );
  }
}
export default AddContact;
