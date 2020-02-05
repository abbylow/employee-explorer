import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Overview from './components/Overview';

export default function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app" >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path={'/overview/:slug'}>
            <Overview />
          </Route>
        </Switch>
      </div>
    </BrowserRouter >
  );
}

