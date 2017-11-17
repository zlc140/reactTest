import React, {Component} from 'react'
import { IndexLink, Link } from "react-router"
import './index.scss'

export default class Header extends Component{
    render() {
        return (
            <div className='header'>
                <IndexLink to='/' activeClassName="root_ctive">首页</IndexLink>
                {' · '}
                <Link to="list" activeClassName="root_ctive" >列表页</Link>
                {' · '}
                <Link to="detail/1" activeClassName="root_ctive" >详情页</Link>
                {' · '}
                <Link to="ajaxzen" activeClassName="root_ctive" >ajax请求</Link>
                {' · '}
                <Link to="settime" activeClassName="root_ctive" >定时器</Link>
                <span className="fr">更多</span>
            </div>
        )
    }
} 