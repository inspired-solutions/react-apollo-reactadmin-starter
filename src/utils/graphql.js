import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from 'apollo-boost'
import { onError } from 'apollo-link-error'

import store from 'store'

import { URI } from '../config/app'
import { AUTH_TOKEN, TOKEN_KEY } from '../config/auth'
//import { logout } from './auth'

const httpLink = new HttpLink({ uri: URI, credentials: 'same-origin' })

const authLink = new ApolloLink((operation, forward) => {
  const authToken = store.get(AUTH_TOKEN)
  const authorizationHeader = authToken ? `${TOKEN_KEY} ${authToken}` : null
  operation.setContext({
    headers: {
      authorization: authorizationHeader
    }
  })
  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {

  console.log(graphQLErrors, networkError)
  console.log(networkError ? networkError.statusCode : 'None')

  if (graphQLErrors && graphQLErrors.length) {
    const [error] = graphQLErrors

    if (error.code === 401) {
      //  logout()
      console.error('un error ocurrio, loggin out....')
    }
  }
})

const link = ApolloLink.from([
  errorLink, authLink, httpLink
])

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})

export default client
