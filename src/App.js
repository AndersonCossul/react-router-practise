import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Tasks from './components/Tasks'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <h1>React Router Assignment</h1>
          <Route path="/tasks" component={Tasks}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
