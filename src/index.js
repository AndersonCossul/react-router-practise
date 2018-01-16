import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configAxios from './axios.config'

configAxios()

ReactDOM.render( <App />, document.getElementById( 'root' ) )
registerServiceWorker()
