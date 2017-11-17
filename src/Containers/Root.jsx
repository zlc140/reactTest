import React, { Component } from 'react'
import routes from '../Routers'
import { Router } from 'react-router'

import { Provider } from 'react-redux';


import './common.scss'

export default class Root extends Component{
    render(){
        const { history,store } = this.props;
        
        return (
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        )
    }
}