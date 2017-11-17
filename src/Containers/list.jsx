import React, {Component, PropTypes} from 'react'
import Product from '../Components/Product'
import { connect } from 'react-redux'

  class ListView extends Component {
    
    constructor(props,context) {
        super(props,context)
        let {store} = this.context
        console.log(this.props,store)
    }
    render() {
        let lists = [
            {id:0,name:'哈哈哈',num:2},
            {id:1,name:'嘎嘎嘎',num:2},
            {id:2,name:'哇哇哇',num:4},
            {id:3,name:'嘿嘿嘿',num:24},
            {id:4,name:'呵呵呵',num:2}
        ]
        let { value } = this.props
        return (
            <div >
                <h4>我是列表页</h4>
                <ul>
                    {
                        lists.map((prop,index) => <Product value={value} detail={prop} key={index} />)
                    }
                </ul>
            </div>
        )
    }
} 
function mapStateToProps(state) {
    return {
      value: state.seconds
    }
}

export default connect(
    mapStateToProps
  )(ListView)