import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import './index.css'
import { AuthProvider } from './Components/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <App />
    </AuthProvider>
)
