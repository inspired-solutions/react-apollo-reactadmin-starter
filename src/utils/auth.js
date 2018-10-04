import store from 'store'
import { AUTH_TOKEN } from '../config/auth'

export const getToken = () => {
  return store.get(AUTH_TOKEN)
}

export const isAuth = () => {
  return !!getToken()
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem('user')) || {}
}

export const logout = () => {
  store.remove(AUTH_TOKEN)
  return true
}

export const login = (data) => {
  store.set(AUTH_TOKEN, data.key)
  store.set('user', JSON.stringify(data.user))
}
