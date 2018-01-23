import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Print from './Print';
import Digital from './Digital';
import Bloom from './print/Bloom';
import Churchill from './print/Churchill';
import Binet from './print/Binet';
import STNRelease from './digital/STNRelease';
import TomWaits from './digital/TomWaits';
import Zbar from './digital/Zbar';

export default class Visual extends Component {
  render() {
    return(
      <div>
        <h2>Graphic Design</h2>
        <p>In the past four years, I've created dozens of yearbooks working with elementary, specialty, and private schools. This involves presenting the client with different themes I've made and then customizing it further based on their requests.</p>
        <p>During this same time, I've created several show posters for Small Time Napoleon. Apart from creating our posters, I've created all our branding and merchandise imagery, allowing a gradual and consistent evolution of the band's brand.</p>
        
        <div className="links">
          <NavLink exact to="/">Print</NavLink>
          <NavLink to="/digital" >Digital</NavLink>
        </div>

        <div className="design-samples">
          <Switch>
            <Route exact path="/" component={ Print } />
            <Route path="/digital" component={ Digital } />
            <Route path="/bloom" component={ Bloom } />
            <Route path="/churchill" component={Churchill} />
            <Route path="/binet" component={Binet} />
            <Route path="/stnRelease" component={STNRelease} />
            <Route path="/tomWaits" component={TomWaits} />
            <Route path="/zBar" component={Zbar} />
          </Switch>
        </div>
      </div>
    )
  }
};