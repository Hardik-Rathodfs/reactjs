import { legacy_createStore } from "redux"

let initial = {
    count : 0,
    count1 : 10,
    count2:50
}

 const reducer=(state = initial,action)=>{
    switch(action.type){
        case "DEP":
            return{
                ...state,
                count:state.count+1
            }
        case "WIT":
            return{
                ...state,
                count:state.count-1
            }
            case "INCREASE" :
                return {
                   ...state,
                   count1 : state.count1 + action.payload
                }  
           case "DECREASE" :
           return {
               ...state,
               count1 : state.count1 - action.payload
           }       
           case"INCRE":
           return{
            ...state,
            count2:state.count2 + action.payload
           }
           case "DECRE":
            return{
                ...state,
                count2:state.count2-action.payload
            }
                
           default : return state;    
    }
}

export let store = legacy_createStore(reducer)