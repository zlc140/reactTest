import React, {Component, PropTypes} from 'react'
var interval = null
export default class Main extends Component {
    constructor(props,context){
        super(props,context)
        
    }
 
    render(){
        console.log(this.props)
       let {  number , seconds ,status, increment} = this.props
        return (
            <div>
                <button onClick={increment} >{status=="Stopped"?'结束':'开始'}</button>
                <p>开始时间：<span>{number}</span></p>
                { seconds } 
            </div>
        )
    }
}
// Main.propTypes = {
//     seconds:PropTypes.seconds.isRequired,
//     number:PropTypes.number.isRequired,

// }