import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import RegisterItem from './components/RegisterItem';
import GetItens from './components/GetItens';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home/>}/>
        <Route path="/register-item" component={() => <RegisterItem/>}/>
        <Route path="/get-itens" component={() => <GetItens/>}/>
      </Switch>
    </Router>
  );
}

export default App;
