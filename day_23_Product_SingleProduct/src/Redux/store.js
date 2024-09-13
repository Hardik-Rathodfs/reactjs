import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { proReducer } from "./Productpage/productReducer";
import { SingleproReducer } from "./Singleproduct/singlePageReducer";
import {thunk} from 'redux-thunk'

let combine = combineReducers({
    productReducer : proReducer,
    SingleProduct : SingleproReducer
})


export const store = legacy_createStore(combine,applyMiddleware(thunk))