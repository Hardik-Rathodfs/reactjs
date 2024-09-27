import { googleAuth } from "../../FirebaseFolder/firebase"


let initial = {
    isLogin : false,
    user : null
}

export const google = (dispatch)=>{
    googleAuth().then((Res)=>{
        console.log(Res)
        dispatch({type : "SUCCESS", payload : {name : Res.user.displayName,email : Res.user.email}})
    })
}



export const UserReducer = (state=initial,action)=>{
    switch(action.type){
        case "SUCCESS" :
             return {
                ...state,
                isLogin : true,
                user : action.payload
             }
             
        default : return state    
    }
}