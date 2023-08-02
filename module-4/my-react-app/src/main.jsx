import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './pages/App';
import Spotify from './pages/spotify'
import Login from './pages/login';
import Callback from './pages/Callback';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/spotify",
    element: <Spotify />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/callback",
    element: <Callback />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
