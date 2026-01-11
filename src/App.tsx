import type { ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/App.router'

import './locales/i18n'

function App(): ReactElement {
  return <RouterProvider router={router} />
}

export default App
