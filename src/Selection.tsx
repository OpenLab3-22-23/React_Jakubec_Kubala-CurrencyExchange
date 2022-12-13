import { useState } from "react"

export default function Selector({convertFrom, dropBoxSelection} :{convertFrom:string, dropBoxSelection:string})
{
    return(
        <div className="top_box"> 
         <input type="" name="" value={convertFrom}/>
         <select name="currency">
            <option value="">{dropBoxSelection}</option>
         </select>
        </div>
    )
}

