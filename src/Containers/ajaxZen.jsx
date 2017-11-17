import React, {Component, PropTypes} from 'react'
import axios from 'axios'

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            fetching:false,
            lists:[]
        }
    }
    componentDidMount() {
        this.fetchZen()
    }
    fetchZen(){
        let startfetch = true
        this.setState({fetching:startfetch})
        axios.get('https://api.github.com/zen').then(res => {
            if(res.status == 200){
                console.log('ajax',res)
                const lis = this.state.lists
                lis.push(res.data)
                startfetch=false
                this.setState({fetching:startfetch})
                this.setState({lists:lis})
            }
        })
    }
    render(){
        let fetching = this.state.fetching
        return(
            <div>
                <button className="btn" onClick={this.fetchZen.bind(this)}>{ fetching ? '请求中...':'请求'}</button>

                <ul>
                    {
                        this.state.lists.length>0 ? this.state.lists.map((one,index) => <li key={index}>{one}</li>):'暂无信息'
                    }
                </ul>

            </div>
        )
    }
}