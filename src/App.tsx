import Layout from '@components/Layout'
import Loader from '@components/Loader'
import HomePage from '@pages/Home'
import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) return <Loader />

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
