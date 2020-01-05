import React from 'react';
import './App.scss'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Navbar from './components/Navbar'

//Pages
import NotFound from './pages/NotFound'
import Account from './pages/Account'

const App = () => {

  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/NotFound" component={NotFound} />
        <Redirect to="/NotFound" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
