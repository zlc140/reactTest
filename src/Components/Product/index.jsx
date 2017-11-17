import React, {Component, PropTypes} from 'react'
import { Link } from "react-router"

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            detail:this.props.detail
        }
    }
    render(){
        let pro = this.state.detail
        return(
            <li>
                <Link to={'detail/'+pro.id}>
                    <span> {pro.id}</span>
                    <span> {pro.name}</span>
                    <span> {pro.num}</span>
               </Link>
            </li>
        )
    }
}