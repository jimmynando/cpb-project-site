import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Templates/Header/Header';
import Footer from '../Templates/Footer/Footer';
import Finance from '../Pages/Finance/Finance';

import './App.scss';

function App() {
  return (
    <Router>  
      <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" component={Finance} />
            <Route exact path="/finance" component={Finance} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
