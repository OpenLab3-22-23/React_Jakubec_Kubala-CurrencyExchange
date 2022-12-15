import { useState } from "react"

export default function Selector({options} :{options:Array<string>})
{
    return(
        <div className="top_box"> 
         <input type="" name=""/>
         <select name="currency" id="selectorset">
            {options.map((currencies) => (
              <option value="">{currencies}</option>
             ))} 
           
         </select>
        </div>
    )
}

