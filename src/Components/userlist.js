
import React from "react";
class UserList extends React.Component {
    render() {
        return (
            <div>

                <h3>Hello {this.props.user.name}</h3>
                
                <h2>Hobbies</h2>
                <ul>
                    {this.props.user.hobbies.map((n) => (
                        <li>{n}</li>
                    ))}
                </ul>
                {this.props.children}
                
            </div>

        );
    }
}
export default UserList;