import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom';
import { createBrowserRouter } from "react-router";
import Home from './page/Home.jsx';
import Publiclayout from './layout/Publiclayout.jsx';
import About from './page/About.jsx';
import Explore from './page/Explore.jsx';


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Publiclayout/>,
    children:[
      {
        path:"/",
        index:true,
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/explore",
        element:<Explore/>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
