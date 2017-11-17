import React, {Component, PropTypes} from 'react'
var interval = null
export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            num: this.props.datas.num,
            startTime:this.props.datas.startTime,
            start:this.props.datas.start,
            setInter:null
        }

    }
    goNum(){
        let val = this.state.num
        
        this.setState({
            num:val + 1
        })
        
        console.log(this.state.num)
    }
    componentDidMount (){
        console.log(0)
        interval && clearInterval( interval )
    }
    componentWillReceiveProps (val){//当父组件传入的props发生变化时调用，初始化和render生成前不调用
        if(val.datas.start){
            clearInterval( interval )
            interval = setInterval(this.goNum.bind(this),1000)
        }else{
            clearInterval( interval )
        }
    }
    componentWillUnmount () {
        clearInterval( interval )
      }
    render(){
        
        let {num,startTime} = this.state
        return (
            <div>
                <p>开始时间：<span>{startTime}</span></p>
                { num }
            </div>
        )
    }
}