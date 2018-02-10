import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import './App.css'
import Tasks from './components/Tasks'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import c404 from './components/c404'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
              </ul>
            </nav>
          </header>

          <hr/>

          <Switch>
            <Route path="/tasks" component={Tasks}/>
            <Route path="/users" component={Users}/>
            <Route path="/courses" component={Courses}/>
            <Route component={c404}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
