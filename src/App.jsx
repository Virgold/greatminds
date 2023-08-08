import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(10)
  const handleClick = () => setCount((count) => count + 1)

  return (
    <>
      <Navbar />
    </>
  )
}

export default App
