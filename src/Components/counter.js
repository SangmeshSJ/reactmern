import React from 'react';
class Counter extends React.Component{

constructor(props){
    super(props);
    this.state={ count: 1}
}

onclick(type){
   this.setState(prevState => {
      return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
   });
}

render() {
 return (
   <div>
     Count: {this.state.count}
    <br/>
     <input type='button' onClick={this.onclick.bind(this, 'add')} value='Increment'/>
    </div>
  )
}
}
export default Counter