import React,{Component} from 'react';
class GreetingClassComponent extends Component {
    render() {
        return (
            <div>
             
                <h1>
                    Hello {this.props.name}
                </h1>
            </div>
        )
    }
}
export default  GreetingClassComponent;