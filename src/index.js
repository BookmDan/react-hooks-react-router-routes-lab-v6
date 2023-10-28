import React from 'react';
import { createRoot } from 'react-dom';
import { RouterProvider, Routes, Route, createBrowserRouter } from 'react-router-dom'; // Import the necessary components
import Movies from './components/Movies';
import Directors from './components/Directors';
import Actors from './components/Actors';
import AppRoutes from './AppRoutes'; 

const router = createBrowserRouter([
  {
    path: "/movies",
    element: <Movies />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  }
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}>
    <AppRoutes />
  </RouterProvider>
);
