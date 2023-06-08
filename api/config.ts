import request from 'utils/request'
import { trimObject } from 'utils'

const BASE_API_URL = "http://localhost:3000/v1"

export function sendRequest(method: any, url: any, data: any) {
  if (method === METHOD.DELETE) {
    return request({
      url: url + data,
      method: method,
      baseURL: BASE_API_URL
    })
  } else {
    return request({
      url: url,
      method: method,
      data: trimObject(data),
      baseURL: BASE_API_URL
    })
  }
}

export const METHOD = {
  POST: 'post',
  DELETE: 'delete',
  GET: 'get'
}
