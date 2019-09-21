import Cookies from 'js-cookie'

const TokenKey = 'tdx-Token'
const NameKey = 'tdx-Name'

// token
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// name
export function getName() {
  return localStorage.getItem(NameKey)
}

export function setName(name) {
  return localStorage.setItem(NameKey, name)
}

export function removeName() {
  return localStorage.removeItem(NameKey)
}
