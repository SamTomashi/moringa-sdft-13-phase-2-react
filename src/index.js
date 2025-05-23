import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import JoinUs from './components/JoinUs';
import Transaction from './components/Transaction';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/join-us",
    element: <JoinUs/>
  },
  {
    path: "/transaction/:id",
    element: <Transaction/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
