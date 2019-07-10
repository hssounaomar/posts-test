import React from 'react';
import Users from './components/Users'
import Posts from './components/Posts'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Router>
      <Route path="/posts/:id" exact component={Posts} />
      <Route path="/" exact component={Users} />
      </Router>
    </Provider>
  );
}

export default App;
