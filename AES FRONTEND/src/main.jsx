import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Rutas from './router/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>
)
