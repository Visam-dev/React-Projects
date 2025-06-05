import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/UserContext.js'
import { useContext } from 'react'

function AppContent() {
  const { user } = useContext(UserContext)
  return (
    <>
      <h1>Hellow {user?.username}</h1>
      <Login />
      <Profile />
    </>
  )
}

function App() {
  return (
    <UserContextProvider>
      <AppContent />
    </UserContextProvider>
  )
}

export default App