export default function ConvertButton({currency} :{currency:string})
{

    function handleClick() {
        alert('The conversion is: ' + currency);
    }
    
    return(
        <div id="conversion-rate">
            <button  onClick={handleClick} className="btn" id="btn">Convert</button>
        </div>
    )
}
