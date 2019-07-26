import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Templates/Header/Header';
import Footer from '../Templates/Footer/Footer';
import Finances from '../Pages/Finances/Finances';

import { Provider } from 'react-redux';
import store from '../../store';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>  
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/" component={Finances} />
              <Route exact path="/finance" component={Finances} />
            </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
