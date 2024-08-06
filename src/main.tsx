import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/index.tsx'

const router = createHashRouter([
  { path: '/', element:<div>1</div> },
  { path: 'page',element:<Home></Home> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
