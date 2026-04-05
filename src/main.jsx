import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MailLayout from './layout/MailLayout.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import Books from './pages/Books/Books.jsx'

const router = createBrowserRouter([
  {
     path: "/",
     element: <MailLayout></MailLayout>,
     children: [
      {
        index:true,
        element: <Homepage></Homepage>
      } ,
      {
        path:"/books",
        element:<Books></Books>
      }
     ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
