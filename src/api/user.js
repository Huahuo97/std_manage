import { URL } from './config'
import axios from 'axios'

export const registerUser = function ({ id, phone, password }) {
  const url = `${URL}/user/register`
  return axios.get(url, {
    params: {
      id,
      phone,
      password
    }
  }).then(res => {
    if (res && res.data) {
      return Promise.resolve(res.data)
    }
  })
}

export const checkLogin = function ({ id, phone, password }) {
  const url = `${URL}/user/login/check`
  return axios.get(url, {
    params: {
      id,
      phone,
      password
    }
  }).then(res => {
    if (res) {
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else if (res.status === 404) {
        return Promise.resolve('该用户不存在')
      }
    }
  })
}
