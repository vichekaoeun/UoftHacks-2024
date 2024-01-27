import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Post from './pages/Post.jsx';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: '/post',
            element: <Post />
        }
    ]);
    return <RouterProvider router={router} />
}
export default Router;