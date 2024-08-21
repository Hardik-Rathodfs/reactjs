import React, { useState } from 'react'

function HOC(Component) {
  
    const add=()=>{

        const[count,setCount]=useState(0)

        const handleInc=()=>{
            setCount(count+1)
        }
        const handleDec=()=>{
            setCount(count-1)
        }

        return (
            <div>
                <h1>{count}</h1>
                <Component count={count} INC={handleInc} DEC={handleDec}/>   
            </div>
          )
    }
  return add;
}

export default HOC