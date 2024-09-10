import { ERROR,LOADING,SUCCESS } from "./Actiontype";

let initial={
    isLoading:false,
    data:[],
    isError:false
}

export const ProductRed =(state=initial,{type,payload})=>{
    switch(type){
        case LOADING:
            return{
                ...state,
                isLoading:true
            }
        case SUCCESS:
            return{
                ...state,
                isLoading:false,
                data:payload
            }
        case ERROR:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default: return state
    }

}