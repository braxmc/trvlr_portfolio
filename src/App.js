import React from 'react';
import { Switch, Route } from 'react-router';
import './App.css';

import Home from './components/home/Home';
import SignIn from './components/signIn/SignIn';

const App = () => (
  <>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/signin' component={SignIn} exact/>
    </Switch>
  </>
)

export default App;
