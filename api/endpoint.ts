import { sendRequest, METHOD } from 'api/config'
export const GET_POST = '/fancythings/posts/get'
export const GET_ALL_POST = '/fancythings/posts/get-all'
export const GET_ALL_CATEGORY = '/fancythings/categories/get-all'
export const GET_ACTIVE_CATEGORY = '/fancythings/categories/get-active'

export const getPost = async (id: any) => {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_POST, {id})
  if (data && data.data) {
    return data.data
  } else {
    return {}
  }
}

export const getAllPost = async (payload: any) => {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_ALL_POST, payload)
  if (data && data.data) {
    const { total, items } = data.data
    return { total, items }
  } else {
    return {}
  }
}

export const getAllCategory = async (payload: any) => {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_ALL_CATEGORY, payload)
  if (data && data.data) {
    const { total, items } = data.data
    return { total, items }
  } else {
    return {}
  }
}

export const getActiveCategory = async () => {
  const { data, error }: any = await sendRequest(METHOD.POST, GET_ACTIVE_CATEGORY, {})
  if (data && data.data) {
    return data.data
  } else {
    return []
  }
}
