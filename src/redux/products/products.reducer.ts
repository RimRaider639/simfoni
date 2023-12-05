import { ProductType } from "../../types/products.types";
import { PRODUCTS } from "./products.actionTypes"

export interface ParamsType {
    page: number,
    limit: number,
    pid: string|undefined,
    name: string,
    category: string,
    sort: string,
    order: string,
    deleted: number
}

export interface StateType {
    loading: boolean,
    error: boolean,
    data: ProductType[] | null,
    count: number,
    params: ParamsType,
}

const initParams:ParamsType = {
    page : 1,
    limit : 10, 
    pid : undefined, 
    name : "", 
    category : "", 
    sort : "", 
    order : "",
    deleted: 0,
}

const initState: StateType = {
    loading:false,
    error:false,
    data: null,
    count: 0,
    params: initParams
}

export default function productsReducer(state:StateType=initState, {type, payload}:any){
    switch (type) {
        default: return state;
        case PRODUCTS.FETCH_LOADING: return {...state, loading:true};
        case PRODUCTS.FETCH_ERROR: return {...state, error:true, loading:false};
        case PRODUCTS.FETCH_SUCCESS: return {...state, data:payload.data, count:payload.count, loading:false};
    }
}