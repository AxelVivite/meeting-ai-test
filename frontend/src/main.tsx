import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'

import 'react-toastify/dist/ReactToastify.css';
import './style.css'

createRoot(document.getElementById('root')!).render(
  <>
    <StrictMode>
      <App />
    </StrictMode>
    <ToastContainer />
  </>
)
