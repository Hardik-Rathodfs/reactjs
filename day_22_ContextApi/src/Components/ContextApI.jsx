import React, { createContext, useReducer } from 'react'

export const Mycontext = createContext()

let count = {
    count : 0,
    count1 : 0
}

const reducer = (state = count,action)=>{
    switch(action.type){
        case "INC" :
            return {
                ...state,
                count : state.count + 1
            }
        case "DEC" :
            return {
                ...state,
                count : state.count - 1
            }
        default : return state        
    }
}



function ContextApI({children}) {
    const [state,dispatch] = useReducer(reducer,count)
  return (
    <Mycontext.Provider value={{state,dispatch}}>
        {children}
    </Mycontext.Provider>
  )
}

export default ContextApI