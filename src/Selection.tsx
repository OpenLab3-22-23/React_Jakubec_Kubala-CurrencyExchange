import { useState } from "react"

export default function Selector({options, isToPrint, onChange} :{options:Array<any>, isToPrint:boolean, onChange:any})
{
    function isDisabled() {
        if(isToPrint == false)
         return "disabled"
    }

   

    return(


        <div className="top_box"> 
         <input type="text" name="" disabled = {isDisabled()} />
         <select name="currency" id="selectorset" onChange={(e) => { onChange(e)}} >
            {options.map((currencies) => (
              <option value={currencies}>{currencies}</option>
             ))} 
           
         </select>
        </div>


    )
}

