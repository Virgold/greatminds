import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ButtonModal from './components/Modal'
import Cards from './components/Card'
import ChangeDocument from './components/ChangeDocument'
import CompA from './components/CompA'
import ComB from './components/ComB'


export const NameContext = createContext();
export const ChangeNameContext = createContext();

function App() {
  console.log("yse");
  const [formData, setFormData] = useState({
    fname: "Joe",
    email: "test@mail.com",
    pword: ""
  })

  return (
    <NameContext.Provider value={{ formData, setFormData }}>
      <div className="flex flex-col md:flex-row items-center justify-center m-auto h-full ">
        <div className="flex md:flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full">
          <CompA />
        </div>
      </div>
      {/* <Navbar /> */}
    </NameContext.Provider>
  )
}

export default App

{/* <ButtonModal /> */ }
{/* <Cards /> */ }
{/* <ChangeDocument color="red">
            Hello
          </ChangeDocument>
          <ChangeDocument color =" blue">
            Okay
          </ChangeDocument> */}