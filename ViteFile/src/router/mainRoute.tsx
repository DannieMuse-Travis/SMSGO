import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/LayOut/LayOut"
import HomeScreen from "../pages/Home/HomeScreen"
import { Login } from "../pages/auth/Login"
import { Register } from "../pages/auth/Register"
import { NotificationBox } from "../pages/auth/NotificationBox"
import PrivateRouter from "./PrivateRoute"
import {ErrorBoundary} from "react-error-boundary"
import AuthLayout from "../components/LayOut/AuthLayout"
import Verify from "../pages/auth/VerifyScreen"
import ErrorComp from "../Error/img/Error"
import { Contact } from "../pages/Home/Contact"
import { Message } from "../pages/Home/Message"
export const MainRouter = createBrowserRouter([

  {
    path: "/",
    element: <AuthLayout/>,
    children:[
      {
        index: true,
        element: <Register/>
      },
            {
              index: true,
              path: "/login",
              element: <Login/>
            },
            {
             index:true,
             path:"/verify-user",
             element:<Verify/>
            },
            {
              index:true,
              path: "/notify",
              element: <NotificationBox/>
            }

    ]
  },
    

  


  {
        path:"/Home",
        element:
        (
            <ErrorBoundary FallbackComponent= 
          {ErrorComp}>
             <PrivateRouter>
          <LayOut/>
            </PrivateRouter>  
              </ErrorBoundary>   
       ),
        children:[
            {
              path:"/Home",
                index:true,
                element:<HomeScreen/>
            },
             {
              index:true,
              path:"contact",
              element:<Contact/>
             },
             {
              index:true,
              path:"message",
              element:<Message/>
             }

          
        ]
    },


            
    
 
 
 {
  path:"*",
  element:<ErrorComp/>
 }
 
  
 
   
])