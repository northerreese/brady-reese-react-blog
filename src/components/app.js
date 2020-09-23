import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './navbar'
import RenderPage from './render-page'

export default function App() {
  // TODO update user
  const user = {
    firstName: 'Brady',
    lastName: 'Reese'
  }

  return (
    <Router>
      <div className='app'>
        <Navbar user={user} />
        <Switch>
          <Route path='/:page' component={RenderPage} />
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}