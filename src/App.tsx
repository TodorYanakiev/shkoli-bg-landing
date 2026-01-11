import type { ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/App.router'

function App(): ReactElement {
  return <RouterProvider router={router} />
}

export default App
