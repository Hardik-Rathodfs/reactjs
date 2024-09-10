import { ERROR, LOADING, SUCCESS } from "./Actiontype"


export const FetchData = (dispatch)=>{
    dispatch({type : LOADING})
    fetch(`https://mock-server-app-2-4ouf.onrender.com/products`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type : SUCCESS, payload : res})
    })
    .catch((err)=>{
        dispatch({type : ERROR})
    })
}