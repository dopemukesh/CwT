// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='bg-white dark:bg-gray-900 text-gray-800 dark:text-white '>
      <App />
    </div>
  </BrowserRouter>
)
