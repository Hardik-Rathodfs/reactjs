import React from "react"
import { useState } from "react"
function Fullcounter()
{

    const [count,setcount]=useState(0)

    function Add()
    {
        setcount(count+1)
    }
    function Minus()
    {
        setcount(count-1)

        if(count == 0)
        {
            clearInterval(setcount(0))

        }
    }

    return(
        <div>
        <h1>{count}</h1>
        <button onClick={Add}>+</button>
        <button onClick={Minus}>-</button>
        </div>
    )
}

export default Fullcounter