import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number:this.props.nums
        }
        console.log(this.props)
    }
    handAdd(val){
        if(val == 'add'){
            this.props.increment(1)
        }else{
            this.props.decrement(1)
        }
    }
    render(){
        let nums = this.state.number
        let {  number , increment,decrement} = this.props
        return(
            <div>
               
                <button onClick={this.handAdd.bind(this,'add')}>add</button>
                {' ' }
                <span>{number}</span>
                { ' '}
                <button onClick={this.handAdd.bind(this,'cut')}>cut</button>
            </div>
        )
    }
}