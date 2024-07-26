import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogPost from './pages/BlogPost/BlogPost';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/blog/:id',
        element: <BlogPost />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);