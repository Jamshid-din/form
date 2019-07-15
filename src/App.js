import React from 'react';
import './App.css';

import Personal from "./Components/Personal";
import Additional from "./Components/Additional";
import Contacts from "./Components/Contacts";
import Profile from "./Components/Profile";

import { Switch, Route, withRouter, NavLink} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends React.Component{
render(){
  return ( 
        <div className="App">
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink exact to="/" activeClassName="PageSwitcher__Item__Active" className="PageSwitcher__Item">Personal Info</NavLink>
              <NavLink to="/additional_info" activeClassName="PageSwitcher__Item__Active" className="PageSwitcher__Item" >Additional Info</NavLink>
              <NavLink to="/contacts" activeClassName="PageSwitcher__Item__Active" className="PageSwitcher__Item" >Contacts</NavLink>
              <NavLink to="/profile" activeClassName="PageSwitcher__Item__Active" className="PageSwitcher__Item" >Profile</NavLink>
            </div>
            <div className="wrapper">
            <Route render={({location}) => (
              <TransitionGroup className="transition-group">
                <CSSTransition
                  key={location.key}
                  timeout={{ enter: 200, exit: 200 }}
                  classNames="fade"
                >
                  <section className="route-section">
                      <Switch location={location}>
                        <Route exact path="/" component={Personal} />
                        <Route path="/additional_info" component={Additional} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/profile" component={Profile} />
                      </Switch>
                      </section>
                </CSSTransition>
              </TransitionGroup>
              )}/>
            </div>
          </div>
        </div>
    );
  }
}


export default withRouter(App);