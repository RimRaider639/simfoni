import {PRODUCTS} from './products.actionTypes'
import { getDataAPI } from './products.api'
import { AppDispatch } from '../store'

export const getData = (params:any) => async (dispatch:AppDispatch) => {
        dispatch({type:PRODUCTS.FETCH_LOADING})
        getDataAPI(params)
        .then(res=>dispatch({type:PRODUCTS.FETCH_SUCCESS, payload:res}))
        .catch(err=>dispatch({type:PRODUCTS.FETCH_ERROR}))
    }

