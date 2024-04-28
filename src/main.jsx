import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import { HelmetProvider } from 'react-helmet-async'
import FireBaseProvider from './firebase/FireBaseProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FireBaseProvider>
      <HelmetProvider>
        <RouterProvider router={routes}></RouterProvider>
      </HelmetProvider>
    </FireBaseProvider>
  </React.StrictMode>,
)
