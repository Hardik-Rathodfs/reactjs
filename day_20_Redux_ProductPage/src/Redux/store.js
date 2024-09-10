import { combineReducers, legacy_createStore } from "redux"
import { ProductRed } from "./ProductPage/ProductReducer"
import { SinglepageRed } from "./SinglePage/SinglepageReducer"

let combine = combineReducers({
    productReducer : ProductRed,
    singleProduct : SinglepageRed
})

export const store =  legacy_createStore(combine)