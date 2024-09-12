import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextApI from './Components/ContextApI.jsx'

createRoot(document.getElementById('root')).render(
  <ContextApI>
    <App />
  </ContextApI>,
)