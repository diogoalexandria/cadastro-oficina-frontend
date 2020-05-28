import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import RegisterItem from './components/Register';
import GetItens from './components/GetItens';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home/>}/>
          <Route path="/register-item" component={() => <RegisterItem/>}/>
          <Route path="/get-itens" component={() => <GetItens/>}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
