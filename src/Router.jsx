import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />
        }
    ]);
    return <RouterProvider router={router} />
}
export default Router;