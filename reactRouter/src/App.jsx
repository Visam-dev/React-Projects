import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
    <Header/>
   <Outlet/>
    <Footer/>
    </>
  )
}

export default App
