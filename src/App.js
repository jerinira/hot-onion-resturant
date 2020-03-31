import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  Header from './Components/Header/Header';
import Item from './Components/Item/Item';
import Lunch from './Components/Lunch/Lunch';
import Breakfast from './Components/Breakfast/Breakfast';
import Dinner from './Components/Dinner/Dinner';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import MenuBar from './Components/MenuBar/Menubar';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/lunch'>
        <MenuBar></MenuBar>
        <Lunch></Lunch>
        </Route>
        <Route path='/breakfast'>
        <MenuBar></MenuBar>
          <Breakfast></Breakfast>
        </Route>
        <Route path='/dinner'>
        <MenuBar></MenuBar>
          <Dinner></Dinner>
        </Route>
        <Route exact path='/'>
        <Header></Header>
        <MenuBar></MenuBar>
        <Item></Item>
        </Route>
        <Route path='/food/:key'>
          <MenuBar></MenuBar>
            <Details></Details>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>  

    </div>
  );
}

export default App;
