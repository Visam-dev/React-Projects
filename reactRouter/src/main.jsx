import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
 createRoutesFromElements(
 <Route path="/" element={<App />}>
    <Route path="" element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} /> 
    <Route path='user/:userid' element={<User />} />
    <Route 
    loader={githubLoader}
    path='github' element={<Github />} />
  </Route> 
)
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
