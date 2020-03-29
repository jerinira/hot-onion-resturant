import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  Header from './Components/Header/Header';
import Item from './Components/Item/Item';
import Lunch from './Components/Lunch/Lunch';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Breakfast from './Components/Breakfast/Breakfast';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Route path='/lunch'>
        <Lunch></Lunch>
        </Route>
        <Route path='/breakfast'>
          <Breakfast></Breakfast>
        </Route>
        <Route exact path='/'>
        <Item></Item>
        </Route>
      </Router>  

    </div>
  );
}

export default App;
