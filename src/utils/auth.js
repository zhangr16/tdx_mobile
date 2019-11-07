const TokenKey = 'tdx-Token'
const NameKey = 'tdx-Login'

// token
export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
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
