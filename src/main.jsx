import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './Signup'
import './index.css'
import Homepage from './homepage'
import Accedi from './accedi'
import Show from './show'
import ComingSoon from './coming-soon'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signin',
    element: <Accedi />,
  },
  {
    path: '/show',
    element: <Show />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
