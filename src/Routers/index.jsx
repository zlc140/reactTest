import React , { Component, PropTypes } from 'react';
import { Router, Route, Redirect , IndexRoute, browserHistory,hashHistory } from 'react-router';

import Header from '../Components/Header'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
console.log('test',browserHistory)

class Roots extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="view">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
 
import Main from '../Containers/home'
import listCom from '../Containers/list'
import detailCom from '../Containers/detail'
import setTimeCom from '../Containers/setTime'
import notPage from '../Containers/notFound'
import ajaxZen from '../Containers/ajaxZen'
// const listCom = (cb) => {//使用require加载es6风格的组件会有问题，组件需要module.exports = Hello
//     require.ensure([],require => {
//         cb(null,require('../Containers/list').default)
//     },'listCom')
// }
// const detailCom = (cb) => {
//     require.ensure([],require => {
//         cb(null,require('../Containers/detail').default)
//     },'detailCom')
// }
const RouteConfig = (
        <Route path="/" component={Roots} >
            <IndexRoute component={Main} />
            <Route path="list" component={listCom} />
            <Route path="detail/:id" component={detailCom} />
            <Route path="settime" component={setTimeCom} />
            <Route path="404" component={notPage} />
            <Route path="ajaxzen" component={ajaxZen} />
            <Redirect from="*" to="/404"  />
        </Route>
)

export default RouteConfig