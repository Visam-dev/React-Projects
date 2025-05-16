import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [cups, setCups]= useState(0);
  
   const incr=()=>{
    setCups((prevCups)=> prevCups+1);
    setCups((prevCups)=> prevCups+1);
    setCups((prevCups)=> prevCups+1);
    setCups((prevCups)=> prevCups+1);
  }
  const decr=()=>{
    setCups((prevCups)=> prevCups-1);
    setCups((prevCups)=> prevCups-1);
    setCups((prevCups)=> prevCups-1);
    setCups((prevCups)=> prevCups-1);
  }
  return (
    <>
    <h1>chai aur visam</h1>
    <h2>kitnay cup chai chahiye? {cups}</h2>
    <button onClick={incr}>{cups}</button>
    <br />
    <button onClick={decr}>{cups}</button>
    <footer>BROTHER ORDERED {cups} cups of chai!!!</footer>
      </>
  )
}

export default App
