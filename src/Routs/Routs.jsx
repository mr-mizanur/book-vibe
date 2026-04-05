import { createBrowserRouter } from 'react-router'
import MailLayout from '../layout/MailLayout'
import Homepage from '../pages/Homepage/Homepage'
import Books from '../pages/Books/Books'
export const router = createBrowserRouter([
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