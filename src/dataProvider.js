import buildOpenCrudProvider, { buildQuery } from 'ra-data-opencrud'
import apolloClient from './utils/graphql'

const enhanceBuildQuery = introspection => (fetchType, resource, params) => {
  const builtQuery = buildQuery(introspection)(fetchType, resource, params)

  console.log('custom dataProvider, instrospection', introspection, fetchType, resource, params)

  // if (resource === 'Login' && fetchType === 'GET_ONE') {
  //   return {
  //     // Use the default query variables and parseResponse
  //     ...builtQuery,
  //     // Override the query
  //     query: LOGIN,
  //     variables: params,
  //     parseResponse: response => response.data //.login
  //   }
  // }

  return builtQuery
}

export default () =>
  buildOpenCrudProvider({ client: apolloClient, buildQuery: enhanceBuildQuery })

