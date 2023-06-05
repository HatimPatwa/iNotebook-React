import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import { Home } from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      }

    ]
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router={router} />);

