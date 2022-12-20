import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Selector from './Selection'
import Header from './Header'
import ConvertButton from './ConvertButton'

function App(this: any) {


  const [letters, setLetters] = useState<any[]>([]);
  const [currencyFrom, setCurrencyFrom] = useState(0);
  const [currencyTo, setCurrencyTo] = useState(0);
  const PrintWrite1 = true;
  const PrintWrite2 = false;


  useState(() => {
    fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        AddLettersToArray(data);

    });
  },[])
  
  function AddLettersToArray(data:any){
    const entries = Object.entries(data);
    const tmpCurrencies = [];
    for (const [key, value] of Object.entries(entries)) {      
      tmpCurrencies.push(value[0])
    }
    setLetters(tmpCurrencies)
  }

  function setCurrencyFromFnc(e: any) {
    setCurrencyFrom(e.target.value)
  }

  function setCurrencyToFnc(e: any) {
    setCurrencyTo(e.target.value)
  }


  return (
    
    <div className="App">
      <Header/>
        <Selector options = {letters} isToPrint = {PrintWrite1} onChange = {setCurrencyFromFnc}/>
        <Selector options = {letters} isToPrint = {PrintWrite2} onChange = {setCurrencyToFnc}/>
      <ConvertButton />

      
    </div>

    
  )  
}

export default App
