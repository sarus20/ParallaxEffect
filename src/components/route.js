import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '.home';
import About from '.About';
import Services from '.Services';
import Contact from '.Contact';

export default class route extends Component {
    render() {
        return (
            <div>
                 <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about"><About /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
            </div>
        )
    }
}
