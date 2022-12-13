import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Selector from './Selection'
import Header from './Header'
import ConvertButton from './ConvertButton'

function App() {
  
  fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

  function display(data:DataTransfer){
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++) {
      Selector += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  }

  
  
  return (
    
    <div className="App">
      <Header/>
        <Selector convertFrom={"5"} dropBoxSelection={"Moznost1"} />
        <Selector convertFrom={"10"} dropBoxSelection={"Moznost1"}/>
      <ConvertButton currency={"$"}/>

      
    </div>

    
  )  
}

export default App
