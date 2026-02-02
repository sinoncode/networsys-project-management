import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import './assets/css/style.min.css'
import './assets/css/components.css'
import './assets/css/dataTables.min.css'
import './assets/css/flatpickr.min.css'
import './assets/css/prism.min.css'
// import './assets/css/'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
