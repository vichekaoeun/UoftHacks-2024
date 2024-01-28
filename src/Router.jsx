import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Post from './pages/Post.jsx';
import signup from './pages/Signup.jsx';
import signin from './pages/Signin.jsx';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: '/post',
            element: <Post />
        },
        {
            path: '/signup',
            element: <signup />
        },
        {
            path: '/signin',
            element: <signin />
        }
    ]);
    return <RouterProvider router={router} />
}
export default Router;