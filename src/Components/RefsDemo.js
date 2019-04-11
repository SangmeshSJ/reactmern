import React from 'react'
class RefDemo1 extends React.Component{
    
    constructor(props){
        super(props)
        //step1 Crate a ref variable
        this.myrefvar=React.createRef();
    }
    //step3
    componentDidMount(){
        this.myrefvar.current.focus();
        console.log(this.myrefvar)
    }
    render()
    {
        return(
           <div>
               {/* step2 */}
               <input type="text" ref={this.myrefvar} ></input>
               <button>Click</button>
           </div>
        )
    }
}
export default RefDemo1