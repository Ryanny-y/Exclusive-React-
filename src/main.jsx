import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/pages/Home.jsx'
import Contact from './components/pages/Contact.jsx'
import About from './components/pages/About.jsx'
import SignUp from './components/auth/Signup.jsx'
import NotFound from './components/pages/NotFound.jsx'
import Wishlist from './components/pages/Wishlist.jsx'
import Login from './components/auth/Login.jsx'
import './index.css'
import './styles/sliderStyles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// SWIPER
import { register } from 'swiper/element/bundle';
register();

const router = createBrowserRouter([
  {
    path: "/Exclusive-React/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)