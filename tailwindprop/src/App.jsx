import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardNew from './components/card1'
function App() {
 let fewObj={
  name: "Visam Khan",
  age: 20,
  email: "wisamahmed02@gmail.comm"
 }
 const [color, setColor] = useState("olive")
  return (
    <>
    <CardNew username="visam" pricing="1.1"/>
    <CardNew username="ali" pricing="2.2"/>
    <div className="w-60 h-60 rounded-xl mb-4 p-4">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10 mb-4">
          <h1 className="font-bold  font-mono  text-xl  p-3" style={{backgroundColor: color}}>soon</h1>
        </div>
      </div>
    </>
  )
}

export default App
