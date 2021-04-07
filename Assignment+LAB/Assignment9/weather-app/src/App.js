import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <Route  path="/:path" render={(props) => <Container globalStore={"not home"} {...props} /> } />
          </div>
      </Router>

    );
  }
}

export default App;