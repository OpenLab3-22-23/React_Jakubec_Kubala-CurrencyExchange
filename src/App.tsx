import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Selector from './Selection'
import Header from './Header'
import ConvertButton from './ConvertButton'

function App(this: any) {


  const [currencies, setCurrencies] = useState({})
  const [letters, setLetters] = useState([])
 

  
  function AddLettersToArray(){
    const entries = Object.entries(currencies);
    for (var i = 0; i < entries.length; i++) {
      
      //add this to array 
      setLetters([entries[i][0]]);
    }
  }

  useState(() => {
    fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        setCurrencies(data);
        AddLettersToArray();
    });
  },[])
  
  return (
    
    <div className="App">
      <Header/>
        <Selector options = {letters} />
        <Selector options = {letters} />
      <ConvertButton currency={"$"}/>

      
    </div>

    
  )  
}

export default App
