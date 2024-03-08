import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HelmetProvider} from "react-helmet-async"
import {BrowserRouter} from "react-router-dom"
import reportWebVitals from "./reportWebVitals.jsx"

// contexts
import SettingsProvider from './contexts/SettingContext.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <SettingsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

reportWebVitals();