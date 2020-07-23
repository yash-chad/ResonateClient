import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./components/Default";
import SideNav from "./components/Sidenav";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Title from "./components/Title";
import ExpenseList from "./components/ExpenseList";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <SideNav />
      <Title name="Expense" title="manager" />
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/home" component={ExpenseList}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route component={Default}></Route>
      </Switch>
    </div>
  );
}

export default App;
