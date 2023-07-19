import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SignUpButton from './components/signup.jsx'
import LogInButton from './components/login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignUpButton />
    <LogInButton />
  </React.StrictMode>,
)
