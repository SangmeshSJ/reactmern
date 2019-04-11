import React from "react";
class ShowContact extends React.Component {
  render() {
    const contacts = this.props.Contacts;

    return (
      <div>
        <h2> Showing Contacts</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Contact Name</th>
              <th>Contact Number</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.contactname}</td>
                <td>{contact.contactnumber}</td>
                <td>
                    <button className="btn btn-danger" 
                        onClick={() => this.props.deleteContact(contact.id)}>
                        Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ShowContact;
