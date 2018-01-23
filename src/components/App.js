import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
// import NotFound from './NotFound';

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
            <Header />
            <Home />
            <Portfolio />
            <About />
            <Contact />
            <SocialMedia />
            
          


          <div className="footer">© Jeff Thomas 2017</div>
        </div>
      </BrowserRouter>
    );
  }
}