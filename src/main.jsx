import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root.jsx'
import ErrorPage from './Root/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Upload from './pages/Upload.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Cart from './pages/Cart'
import AuthProvider from './component/authprovider/AuthProvider'
import PrivetOutes from './component/privetOut/PrivetOutes'

const router =createBrowserRouter([
      {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/about",
            element:<About></About>
          },
          {
            path:"/upload",
            element:<PrivetOutes><Upload></Upload></PrivetOutes>
          },
          {
            path:"/login",
            element:<Login></Login>
          },
          {
            path:"/signup",
            element:<SignUp></SignUp>
          },
          {
            path:"/cart",
            element:<PrivetOutes><Cart></Cart></PrivetOutes>
          }
        ]
      }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)