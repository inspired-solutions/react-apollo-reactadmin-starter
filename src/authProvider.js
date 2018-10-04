import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin'
import { isAuth, login, logout } from './utils/auth'
import { URI } from './config/app'

function buildQuery(username, password) {
  return `{"query":"mutation login( $username: String!,$password: String!) {login(data: {username: $username, password: $password}){ key,user {id}, created }}",
"variables":{"username":"${username}","password":"${password}"},
"operationName":"login"}`
}

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params

    const request = new Request(URI, {
      method: 'POST',
      body: buildQuery(username, password),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
    return fetch(request)
      .then(data => data.json())
      .then((authData) => {

        console.log('resultao fetch login :::', authData)
        login(authData.data.login)

        return Promise.resolve()
      })
    /*
    test usando fetch al graphql server
    test usando una nueva instancia de apolloclient
    test usando el mismo cliente a traves de dataprovider
     */


  }
  if (type === AUTH_LOGOUT) {
    logout()
    return Promise.resolve()
  }
  if (type === AUTH_ERROR) {
    // ...
  }
  if (type === AUTH_CHECK) {
    return isAuth() ? Promise.resolve() : Promise.reject()
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = 'yonise' //getUser()
    return role ? Promise.resolve(role) : Promise.reject()
  }
  return Promise.reject()
};
