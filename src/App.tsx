import Layout from '@components/Layout'
import HomePage from '@pages/Home'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App
