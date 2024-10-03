import {legacy_createStore,applyMiddleware, combineReducers} from "redux"
import {thunk} from "redux-thunk"
// import { UserReducer } from "./User/UserReducer"
import { proReducer } from "./Product/productReducer"

const allReducer = combineReducers({
    proReducer
    
})

export const store = legacy_createStore(allReducer,applyMiddleware(thunk))