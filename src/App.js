import React, { createContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import  Header from './Components/Header/Header';
import Item from './Components/Item/Item';
import Lunch from './Components/Lunch/Lunch';
import Breakfast from './Components/Breakfast/Breakfast';
import Dinner from './Components/Dinner/Dinner';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';
import MenuBar from './Components/MenuBar/Menubar';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import OrderComplete from './Components/OrderComplete/OrderComplete';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthContextProvider } from './Components/Login/useAuth';

export const UserContext = createContext();

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
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
        <Route path='/order'>
        <MenuBar></MenuBar>
          <OrderComplete></OrderComplete>
        </Route>
        <Route exact path='/'>
        <Header></Header>
        <MenuBar></MenuBar>
        <Lunch></Lunch>
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
      </AuthContextProvider>
    </div>
  );
}

export default App;
