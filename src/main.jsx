import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoader from './component/loders/cartProductsLoader';
import Checkout from './component/Checkout/Checkout';
import SingUp from './component/Singup/SingUp';
import AuthProvider from './component/provider/AuthProvider';
import Privateroute from './routes/Privateroute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
    {
      path: "orders",
      element: <Orders></Orders>,
      loader: cartProductsLoader
    },
    {
      path: "inventory",
      element: <Privateroute><Inventory></Inventory></Privateroute>
    },{
      path: '/checkout',
      element: <Privateroute><Checkout></Checkout></Privateroute>
    },
    {
      path: "login",
      element:<Login></Login>
    },{
      path: 'singup',
      element : <SingUp></SingUp>
    }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
