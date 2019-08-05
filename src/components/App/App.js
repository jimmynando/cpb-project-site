import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Templates/Header/Header';
import Footer from '../Templates/Footer/Footer';
import Menu from '../Templates/Menu/Menu';
import Finances from '../Pages/Finances/Finances';
import AddFinance from '../Pages/Finances/AddFinance';
import EditFinance from '../Pages/Finances/EditFinance';

import { Provider } from 'react-redux';
import store from '../../store';

import './App.scss';
import '../../assets/style/_global.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">   
          <Header />       
          <div className="container-flex">
          <Menu />
            <Switch>
              <Route exact path="/" component={Finances} />
              <Route exact path="/finance" component={Finances} />
              <Route exact path="/addfinance" component={AddFinance} />
              <Route exact path="/editfinance/:idFinance" component={EditFinance} />
            </Switch>
          </div>     
          <Footer />  
        </div>        
      </Router>
    </Provider>
  );
}

export default App;
