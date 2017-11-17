import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number:this.props.nums
        }
        console.log(this.props)
    }
    handleNumber(val){
        let nums = this.state.number
        if(val == 'add'){
            nums += 1
        }else if(val == 'cut' && nums>1){
            nums = nums-1
        }else{
            nums = 0
        }
        this.setState({number:nums})
        this.props.getNum(nums)
    }
    render(){
        let nums = this.state.number
        return(
            <div>
               
                <button onClick={this.handleNumber.bind(this,'add')}>add</button>
                {' ' }
                <span>{nums}</span>
                { ' '}
                <button onClick={this.handleNumber.bind(this,'cut')}>cut</button>
            </div>
        )
    }
}