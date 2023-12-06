import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';



const router = createBrowserRouter([
  {path: "/",
   element: "<Home/>",
   children:
   [{
    path: "",
    element: <Home/>
   },
   {
    path: "about",
    element: <About />
   }]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
