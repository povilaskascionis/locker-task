import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/App'

const appElement = document.getElementById('root')

if (!appElement) {
  throw "Element with id 'root' was not found"
}

createRoot(appElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
