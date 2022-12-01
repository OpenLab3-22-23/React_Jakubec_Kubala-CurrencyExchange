import { useState } from "react"

export default function Selector()

{
    const [convertFrom, setconvertFrom] = useState<string>("Ahoj") 
    const [dropBoxSelection, setdropBoxSelection] = useState<string>("Moznost1") 
    const [dropBoxSelection2, setdropBoxSelection2] = useState<string>("Moznost2") 
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
