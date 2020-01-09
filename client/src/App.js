import React from 'react';
import './App.scss'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Navbar from './components/Navbar'
// import Footer from './components/Footer' 

//Pages
import NotFound from './pages/NotFound'
import Account from './pages/Account'
import Home from './pages/Home'

const App = () => {

  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/" component={Home} />
        <Route path="/NotFound" component={NotFound} />
        <Redirect to="/NotFound" />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
