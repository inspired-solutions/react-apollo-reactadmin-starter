import 'babel-polyfill'
import React, { Component } from 'react'
import './App.css'

import { Admin, Resource } from 'react-admin'
import buildDataProvider from './dataProvider'
import authProvider from './authProvider'

import users from './components/resources/users'
import posts from './components/resources/posts'
import Login from './components/Login'

class App extends Component {
  state = { dataProvider: null }

  async componentWillMount() {
    let dataProvider = await buildDataProvider()
    this.setState({ dataProvider })
  }

  render() {
    const { dataProvider } = this.state

    if (!dataProvider) {
      return (
        <div className="loader-container" >
          <div className="loader" >Loading...</div >
        </div >
      )
    }

    return (
      <div className="App" >
        <Admin title="Users & Posts"
          dataProvider={dataProvider}
          authProvider={authProvider}
          loginPage={Login}
        >
          {permissions => [
            <Resource
              name="User"
              list={users.list}
              show={users.show}
              edit={permissions === 'admin' ? users.edit : null}
              create={permissions === 'admin' ? users.edit : null}
              icon={users.icon}
            />,
            permissions === 'yonise'
              ? <Resource name="Post" {...posts} />
              : null
          ]}
        </Admin >
      </div >
    )
  }
}

export default App
