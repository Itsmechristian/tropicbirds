import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Components
import Home from "./routers/Home";
import About from "./routers/About";
import Navbar from './common/navbar/Navbar';

class Routes extends Component {
  render() {
    return (
      <Router>
        {/* Rendering Location to detect changes */}
        <Route
          render={({ location }) => (
            <Fragment>
                 <Navbar />
              {/* Once it detect location change CSS Transition Trigger to make route fade */}
              <TransitionGroup className="body">
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={100}
                >
                  {/* Switching path */}
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </Fragment>
          )}
        />
      </Router>
    );
  }
}

export default Routes;
