import React, {Component, PropTypes} from 'react'
import './elapse.scss'
var interval = null
export default class Main extends Component {
    constructor(props,context){
        super(props,context)
        
    }
    handClick(){
        let _this = this
        this.props.onstart()
        
            interval = setInterval(function(){
                _this.props.ontimer()
            },1000)
         
    }
    handEnd(){
        clearInterval(interval)
        this.props.onstop()
         
    }
    handReset(){
        clearInterval(interval)
        this.props.onreset()
    }
    render(){
       let { seconds ,status, onstart, onstop, onreset, ontimer } = this.props
        return (
            <div>
                <button className="btn" onClick={this.handClick.bind(this)} >开始</button>
                <button className="btn" onClick={this.handEnd.bind(this)} >结束</button>
                <button className="btn" onClick={this.handReset.bind(this)} >重置</button>
                { seconds } 
            </div>
        )
    }
}
// Main.propTypes = {
//     seconds:PropTypes.seconds.isRequired,
//     number:PropTypes.number.isRequired,

// }