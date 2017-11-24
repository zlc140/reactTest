import 'babel-polyfill'
import React from 'react';
import { AppContainer } from 'react-hot-loader'
import {render} from "react-dom";
import { hashHistory } from 'react-router'

import store from './Redux/Store'
console.log(store)
store.subscribe(() => { //监听state变化
    // console.log(store.getState())
});

import Root from './Containers/Root'
const RedBox = require('redbox-react').default;


import './assets/normalize.scss'

// store.subscribe(() => {
//     console.log(store.getState())
// })
try{
    render(
        <AppContainer>
             <Root store={store} history={hashHistory} />
        </AppContainer >,
        document.getElementById("root")
    )
} catch (e) {
    render(
    <RedBox error={e}>
       <AppContainer>
            <Root store={store} history={hashHistory} />
        </AppContainer >,
    </RedBox>,
    document.getElementById("root")
    )
}