import Layout from '@components/Layout'
import Loader from '@components/Loader'
import HomePage from '@pages/Home'
import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
