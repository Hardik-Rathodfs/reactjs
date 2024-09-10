import { SERROR, SLOADING, SSUCCESS} from "./ActionType"

let initial = {
    isLoading : false,
    data :{},
    isError : false
}

export const SinglepageRed = (state = initial,{type,payload})=>{
    switch(type){
        case SLOADING:
            return {
                ...state,
                isLoading : true
            }
        case SSUCCESS :
             return {
                ...state,
                isLoading : false,
                data : payload
             }   
        case SERROR :
             return {
                 ...state,
                 isLoading : false,
                 isError : true
             }     
        default : return state    
    }
}