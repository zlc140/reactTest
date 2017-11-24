import React, {Component, PropTypes} from 'react'
import Product from '../Components/Product'
import { connect } from 'react-redux'
import { getList } from '../service'
export default  class ListView extends Component {
    
    constructor(props,context) {
        super(props,context)
        this.state = {
            fetching:false,
            lists:[]
        }
        let {store} = this.context
        console.log(this.props,store)
    }
    render() {
        let _this = this
        return (
            <div >
                <h4>我是列表页</h4>
                <ul>
                    {
                        !_this.state.fetching && _this.state.lists.map((prop,index) => <Product detail={prop} key={index} />)
                       
                    }
                    {
                        _this.state.fetching &&<span>记载中。。。<img src="http://obl1r1s1x.bkt.clouddn.com/loading.gif" alt="loading"/></span>
                    }

                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.setState({'fetching':true})
        getList().then(res => {
            this.setState({'lists':res,'fetching':false})
        })
    }
} 