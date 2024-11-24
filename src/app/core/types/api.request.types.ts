import {APIRequestResources} from "../enums"

export type APIRequestResource =
  APIRequestResources.ShopService |
  APIRequestResources.OrderService|
  APIRequestResources.EmployeeService



export type APIRequestMethod = 'delete' | 'get' | 'post' | 'put'

export type APIRequestCacheStrategy = 'performance' | 'freshness'
