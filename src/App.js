import React, { Component } from 'react';
// View imports
import { HomePageView } from './views';
// React router imports
import { Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePageView} />
      </div>
    );
  }
}

export default App;
