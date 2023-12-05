import axios from 'axios'
import { RawAxiosRequestConfig } from 'axios'
import { ProductType } from '../../types/products.types'

const BASE_URL = `https://backend-cw-4.onrender.com/Products/`
// const BASE_URL = `http://localhost:8080/Products/`

const getURL = (id:string) => `https://backend-cw-4.onrender.com/Products/${id}`
// const getURL = (id:string) => `http://localhost:8080/Products/${id}`

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

export interface ParamsPropsType {
    page: number,
    limit?: number,
    pid?: string,
    name?: string,
    category?: string,
    sort?: string,
    order?: string,
    deleted?: number
}

export interface GetResponse {
    data: ProductType[]
}

export interface GETProductsResponse {
    data: ProductType[],
    count: number,
}


export async function getDataAPI({page, limit, pid, name, category, sort, order}:ParamsType):Promise<GETProductsResponse> {
    const config:RawAxiosRequestConfig = {
        method: 'get',
        url: BASE_URL,
        params: {
            _page: page,
            _limit: limit,
            pid,
            product_name_like: name,
            product_category_tree_like: category,
            _sort: sort,
            _order: order,
            discount_ne: "null"
        }
    }
    const {data, headers} = await axios<ProductType[]>(config)
    return {data, count:headers['x-total-count']?+headers['x-total-count']:0}
}

export async function getSingleDataAPI(id:string):Promise<ProductType> {
    const config:RawAxiosRequestConfig = {
        method: 'get',
        url: getURL(id),
    }
    const {data} = await axios<ProductType>(config)
    return data
}


