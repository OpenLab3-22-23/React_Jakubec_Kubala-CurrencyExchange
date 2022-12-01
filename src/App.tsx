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
      <Selector/>
      <Selector/>
      <ConvertButton/>
    </div>
    
  )
  
  
  
}

export default App
