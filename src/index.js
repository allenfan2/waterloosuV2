import ReactDOM from "react-dom"
import React from "react"
import App from './components/App'
import './index.scss'
import {Provider} from 'react-redux'
import {store} from './store/index'
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily="'Exo 2','Helvetica Neue'"

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"))