import React from "react";
import AddContact from "./Addcontact";
import ShowContact from "./showContact";
import Axios from "axios";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = { Contacts: [] };
  }
  baseURL = "http://localhost:3000/Contacts";

  getContacts = () => {
    Axios.get(this.baseURL).then(Response => {
      this.setState({ Contacts: Response.data });
    });
  };

  addContact = contact => {
    Axios.post(this.baseURL, contact).then(Response => {
      this.getContacts();
      alert("Contact Added");
    });
  };

  deleteContact = id => {
    alert("Contact Id: " + id);
    Axios.delete(this.baseURL + "/" + id).then(
      Response => {
        this.getContacts();
      },
      err => {
        this.setState({ errors: err });
      }
    );
  };

  componentDidMount() {
    this.getContacts();
  }

  render() {
    return (
      <div>
        <h1 className="page-header">Manage Contacts</h1>
        <AddContact addContacts={contact => this.addContact(contact)} />
        <ShowContact Contacts={this.state.Contacts} 
        deleteContact={ this.deleteContact} />
      </div>
    );
  }
}
export default Contact;
