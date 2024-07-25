import React, { useRef } from 'react'

function Data() {
    const inputElement = useRef();
    const handleClick=()=>{
        inputElement.current.focus();
    }
    console.log(inputElement);

  return (
    <div>
        <input type="text"  ref={inputElement}/>
        <input type="text" />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Data