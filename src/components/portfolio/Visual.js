import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Print from './Print';
import Digital from './Digital';

import EnhanceVisual from './EnhanceVisual';

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
            <Route path="/bloom" render={ () => <EnhanceVisual title="Bloom Yearbook 2016" alt="Bloom Yearbook" image="./images/BloomCover.jpg" return="/" /> } />
            <Route path="/churchill" render={ () => <EnhanceVisual title="Churchill Yearbook 2017" alt="Churchill Park Yearbook" image="./images/churchillParkCover.jpg" return="/" /> } />
            <Route path="/binet" render={ () => <EnhanceVisual title="Binet Yearbook 2018" alt="Binet Yearbook" image="./images/BinetCover.jpg" return="/" /> } />
            <Route path="/stnRelease" render={ () => <EnhanceVisual title="Small Time Napoleon EP Release show poster 2017" alt="Small Time Napoleon release show poster" image="./images/STNEPReleasePoster.jpg" return="/digital" /> } />
            <Route path="/tomWaits" render={ () => <EnhanceVisual title="Bella Muerta, Tom Waits inspired Show Poster 2016" alt="Tom Waits inspired show poster" image="./images/tomwaits.jpg" return="/digital" /> } />
            <Route path="/zBar" render={ () => <EnhanceVisual title="Zanzabar Show Poster 2016" alt="Zanzabar show poster" image="./images/ZBAR.jpg" return="/digital" /> } />
          </Switch>
        </div>
      </div>
    )
  }
};