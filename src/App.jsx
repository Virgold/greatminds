import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ButtonModal from './components/Modal'
import Cards from './components/Card'
import ChangeDocument from './components/ChangeDocument'
import ComA from './components/ComA'
import ComB from './components/ComB';
import ComC from './components/ComC'

export const NameContext = createContext()

function App() {
  const [name, setName] = useState("Vitalis")

  return (
    <NameContext.Provider value={"VITALIS"}>
      <div className="flex flex-col md:flex-row items-center justify-center m-auto h-full ">
        <div className="flex md:flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full">
          <ComC />
          <ComA />
        </div>
      </div>
      {/* <Navbar /> */}
    </NameContext.Provider>
  )
}

export default App
