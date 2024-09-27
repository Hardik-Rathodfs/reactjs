
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import { proReducer } from "./Product/productReducer"
import {thunk} from "redux-thunk"
import { UserReducer } from "./User/UserReducer"

const allReducer = combineReducers({
    proReducer,
    UserReducer
})

export const store = legacy_createStore(allReducer,applyMiddleware(thunk))