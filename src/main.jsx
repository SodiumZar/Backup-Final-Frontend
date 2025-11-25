import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './RestAPI.jsx'
import RestAPI from './RestAPI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RestAPI />
  </StrictMode>,
)
