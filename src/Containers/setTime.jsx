import React, {Component, PropTypes} from 'react'
import Elapse from '../Components/Elapse'
import {connect} from 'react-redux'


 class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            start:false,
            startTime: new Date().getTime(),
            num:0
        }

    }
    // startTime(){
    //     this.setState({
    //         start:!this.state.start
    //     })
    // }
    render(){
        let {num} = this.props
        return (
            <div>
                定时器{'    '}<button onClick={this.startTime.bind(this)}>{start?'结束':'开始'}</button>
                
                <br />
                
                 <Elapse datas={num} />  
            </div>
        )
    }
}
 

function mapStateToProps(state) {
    console.log('state',state)
    return {
        num:state.timer
    }
}
function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: ()  => dispatch(getNumber)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)

 

 