import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Print from './Print';
import Digital from './Digital';

import EnhanceVisual from './EnhanceVisual';
import { 
  BloomData, 
  ChurchillData, 
  BinetData,
  STNData,
  TomWaitsData,
  ZbarData
  } from '../../data/portfolioImages.js';

export default class Visual extends Component {
  render() {
    return(
      <div className="visual">
        <div className="info">
          <h2>Graphic Design</h2>
          <p>In the past four years, I've created dozens of yearbooks working with elementary, specialty, and private schools. This involves presenting the client with different themes I've made and then customizing it further based on their requests.</p>
          <p>During this same time, I've created several show posters for Small Time Napoleon. Apart from creating our posters, I've created all our branding and merchandise imagery, allowing a gradual and consistent evolution of the band's brand.</p>
        </div>
        
        <div className="links">
          <NavLink to="/">Print</NavLink>
          <NavLink to="/digital" >Digital</NavLink>
        </div>

        <div className="design-samples">
          <Switch>
            <Route exact path="/" component={ Print } />
            <Route path="/digital" component={ Digital } />
            <Route path="/bloom" render={ () => <EnhanceVisual data={ BloomData } /> } />
            <Route path="/churchill" render={ () => <EnhanceVisual data={ ChurchillData } /> } />
            <Route path="/binet" render={ () => <EnhanceVisual data={ BinetData } /> } />
            <Route path="/stnRelease" render={ () => <EnhanceVisual data={ STNData } /> } />
            <Route path="/tomWaits" render={ () => <EnhanceVisual data={ TomWaitsData } /> } />
            <Route path="/zBar" render={ () => <EnhanceVisual data={ ZbarData } /> } />
          </Switch>
        </div>
      </div>
    )
  }
};