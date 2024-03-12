import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from '@/App'
import store from '@/store'

const appElement = document.getElementById('root')

if (!appElement) {
  throw "Element with id 'root' was not found"
}

createRoot(appElement).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
