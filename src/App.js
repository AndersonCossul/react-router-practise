import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import './App.css'
import Tasks from './components/Tasks'
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

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

          <Route path="/tasks" component={Tasks}/>
          <Route path="/users" component={Users}/>
          <Route path="/courses" component={Courses}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
