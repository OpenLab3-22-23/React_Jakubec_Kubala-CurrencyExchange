import { useState } from "react"

export default function Selector({convertFrom, dropBoxSelection, dropBoxSelection2} :{convertFrom:string, dropBoxSelection:string, dropBoxSelection2:string})
{
    return(
        <div className="top_box"> 
         <input type="" name="" value={convertFrom}/>
         <select name="currency">
            <option value="">{dropBoxSelection}</option>
            <option value="">{dropBoxSelection2}</option>
         </select>
        </div>
    )
}

