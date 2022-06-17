import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import 'materialize-css/dist/css/materialize.min.css'

import App from "./components/App"
import reducers from './reducers'

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    ,document.getElementById('root'))