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
import About from './pages/About'

const App = () => {

  return(
    <BrowserRouter>
      <Navbar />
      <div id="main">  
        <Switch>
          <Route path="/account" component={Account} />
          <Route path="/about" component={About} />
          <Route path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
