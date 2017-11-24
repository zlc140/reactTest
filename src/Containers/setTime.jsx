import React, {Component, PropTypes} from 'react'
import Elapse from '../Components/Elapse'
import {connect} from 'react-redux'
import {increment,decrement} from '../Redux/action/counterActions'
import {bindActionCreators} from 'redux'

 class Main extends Component {
    constructor(props,context){
        super(props,context)
        console.log('contend',this.context)
        this.state = {
            start:false,
            startTime: new Date().getTime(),
            num:0
        }

    }
    startTime(){
        this.setState({
            start:!this.state.start
        })
    }
    
    render(){
        let {num,increment,decrement} = this.props
        let start = this.state.start
        return (
            <div>
                定时器{'    '}
                {/* <button onClick={this.startTime.bind(this)}>{start?'结束':'开始'}</button> */}
                <br />
                 <Elapse {...num} increment={increment} decrement={decrement} />  
            </div>
        )
    }
}
 

function mapStateToProps(state) {
    console.log('state',state)
    return {
        num:state.timer,
    }
}
function mapDispatchToProps(dispatch){
    // return {actions: bindActionCreators(increment,dispatch)}
    return {
        increment: ()  => {
            dispatch(increment(1))
        },
        decrement: () => {
            dispatch(decrement(1))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)

 

 