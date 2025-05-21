import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard")
  }, [password])

  const passwordGenerator = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numAllowed) {
      chars += "0123456789"
    }
    if (charAllowed) {
      chars += "!@#$%^&*()_+[]{}|;:,.<>?/"
    }
    let password = ""
    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length+1)
      password += chars.charAt(randomIndex)
    }
    setPassword(password)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md  mx-auto shadow-md rounded-xl px-4 pb-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-2 py-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
         value={password} 
         className='outline-none w-full py-1 px-3 m-4 rounded-lg'
         placeholder='password'
         readOnly
         ref={passwordRef} />
         <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 m-4 rounded-lg'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => setLength(e.target.value)}
           />  <label>Length: {length}</label>
          
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          checked={numAllowed} 
          onChange={() => setNumAllowed((prev)=>!prev)} />
          <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          checked={charAllowed} 
          onChange={() => setCharAllowed((prev)=>!prev)} />
          <label>Characters</label>
      </div>
      </div>
    </div>
    </>
  )

}
export default App
