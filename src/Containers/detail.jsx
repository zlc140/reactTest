import React, { Component, PropTypes } from 'react'
import Counter from '../Components/Counter'
import {connect} from 'react-redux'


export default class DetailView extends Component {
    constructor(props,context) {
        super(props,context)
        this.state = {
            nums: 5,
            pro: null
        }
    }
    okSublime() {
        console.log(this.state.nums)
    }
    getNum(val) {
        this.setState({ nums: val })
    }

    render() {
        console.log(this.props)
        let detail = null
        if (this.state.pro != null) {
            let child = this.state.pro
            detail = (<div>
                <h4>我是详情页</h4>
                <br />
                <p>商品名称:{child.name}</p>
                <p>商品id:{child.id}</p>
                <Counter nums={child.num} getNum={this.getNum.bind(this)} />
                <button onClick={this.okSublime.bind(this)}>保存</button>
            </div>
            )
        } else {
            detail = (
                <div>暂无详情！</div>
            )
        }
        return (
            <div>
                {detail}
            </div>
        )
    }
    componentDidMount() {
        let lists = [
            { id: 0, name: '哈哈哈', num: 2 },
            { id: 1, name: '嘎嘎嘎', num: 2 },
            { id: 2, name: '哇哇哇', num: 4 },
            { id: 3, name: '嘿嘿嘿', num: 24 },
            { id: 4, name: '呵呵呵', num: 2 }
        ]
        let _this = this
        const detail = lists.map((child, index) => {
            if (child.id == this.props.params.id) {
                this.setState({
                    nums: child.num,
                    pro: child
                })
            }
        })
    }
}


// module.exports = DetailView
