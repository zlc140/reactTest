import React, {Component, PropTypes} from 'react'
import Elapse from '../Components/Elapse'
import {connect} from 'react-redux'
import * as timerActions from '../Redux/action/timeActions'
import { bindActionCreators } from 'redux'

 class Main extends Component {
    constructor(props,context){
        super(props,context)
        this.state = {
            start:false,
            startTime: new Date().getTime(),
            num:0
        }
    }
    
    render(){
        let { timer,actions } = this.props
        let start = this.state.start
        return (
            <div>
                定时器{'    '}
                {/* <button onClick={this.startTime.bind(this)}>{start?'结束':'开始'}</button> */}
                <br />
                 <Elapse {...timer} {...actions} />  
            </div>
        )
    }
}
 

function mapStateToProps(state) {
    return {
        timer:state.timer,
    }
}
const  mapDispatchToProps = (dispatch) => ({
   actions: bindActionCreators(timerActions,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)

 

 