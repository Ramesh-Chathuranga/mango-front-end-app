import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import {Provider, connect} from 'react-redux';
import {Router, Route, Switch, Redirect ,NavLink} from "react-router-dom";
import {store, appHistory} from "./internal/core/StoreCreator";
import {UserNavBar,PrivateRouter} from "./components/index";
import {DashBoard,Booking,Home,SignUp, Login} from "./modules/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
import "./assets/css/booking.css";
import "./assets/css/homeStyle.css";


ReactDOM.render(
  <Provider store={store}>
  <Router history={appHistory}>
    <div>
      <UserNavBar/>
    </div>
    <Switch>
       <PrivateRouter path="/booking" exact RoutComponent={Booking}/>
       <PrivateRouter path="/reseravtion" exact RoutComponent={DashBoard}/>
       <Route exact path="/signup" render={props => <SignUp {...props} />} />
       <Route exact path="/login" render={props => <Login {...props} />} />
       <Route exact path="/" render={props => <Home {...props} />} />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);





