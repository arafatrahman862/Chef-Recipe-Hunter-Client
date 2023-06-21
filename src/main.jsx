import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import Navbar from './components/Navbar.jsx';
import Blog from './components/Blog.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Chefs from './components/chefs.jsx';
import Chef from './components/Chef.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Recipies from './components/Recipies.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path:"/chefs",
        element: <Chefs></Chefs>
      },
      {
        path:"/chef",
        element: <Chef></Chef>
      },
      {
        path:"*",
        element: <ErrorPage></ErrorPage>
      },{
        path: "/recipes/:id",
        element: <PrivateRoute><Recipies></Recipies></PrivateRoute>,
        loader: ({params}) => fetch(`https://assingment-server-arafatrahman862.vercel.app/recipes/$${params.id}`)
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
