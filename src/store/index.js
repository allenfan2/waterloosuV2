import {createStore,applyMiddleware, } from 'redux'
import logger from 'redux-logger'
import reducer from './reducer'
import thunk from 'redux-thunk';


console.log()
const middleware = [thunk, process.env["NODE_ENV"] == "DEV" && logger].filter(Boolean)
export const store = createStore(reducer,applyMiddleware(...middleware))