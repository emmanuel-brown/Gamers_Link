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
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Account from './pages/Account'
import About from './pages/About'
import Discover from './pages/Discover'

const App = () => {

  return(
    <BrowserRouter>
      <Navbar />
      <div id="main">  
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
