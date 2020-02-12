import React from 'react'
import DOM from 'react-dom'
import App from './App/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import './index.css'

const loggerMiddleware = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

DOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)