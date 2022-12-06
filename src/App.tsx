import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Selector from './Selection'
import Header from './Header'
import ConvertButton from './ConvertButton'

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Selector convertFrom={"0"} dropBoxSelection={"Moznost1"} dropBoxSelection2={"Moznost2"}/>
      <Selector convertFrom={"5"} dropBoxSelection={"Moznost1"} dropBoxSelection2={"Moznost2"}/>
      <ConvertButton currency={"$"}/>
    </div>
  )  
}

export default App
