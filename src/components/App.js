import React, { Component } from 'react';

import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
// import { STNData } from '../data/portfolioImages';
import { STNWebData, AngelData, SignatureData } from '../data/webImages';
import { BloomData, ChurchillData, BinetData, STNData, TomWaitsData, ZbarData } from '../data/portfolioImages';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //header state
      nav: false,
      //portfolio state
      // WEB
      webData: STNWebData,
      // VISUAL
      hasVisualClass: true,
        // PRINT & DIGITAL
      imageClicked: false,
        // PRINT
      printData: BloomData,
        // DIGITAL
      digitalData: STNData,
    };
    // header func
    this.showHideNav = this.showHideNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
    //portfolio func
    // WEB
    this.changeWebImage = this.changeWebImage.bind(this);
    // VISUAL
    this.changeVisualImages = this.changeVisualImages.bind(this);
      // PRINT & DIGITAL
    this.showImage = this.showImage.bind(this);
    this.hideImage = this.hideImage.bind(this);
  }

  //header funcs
  showHideNav(e) {
    this.setState({
      nav: !this.state.nav,
    });
  }
  hideNav(e) {
    this.setState({
      nav: false,
    });
  }

  //portfolio funcs
  // WEB
  changeWebImage(e) {
    if (e.target.id === 'stn') {
      this.setState({
        webData: STNWebData,
      });
    } else if (e.target.id === 'angel') {
      this.setState({
        webData: AngelData,
      });
    } else if (e.target.id === 'signature') {
      this.setState({
        webData: SignatureData,
      });
    }
  }
  // VISUAL
  changeVisualImages(e) {
    // hide images upon header click
    this.setState({
      imageClicked: false,
    });
    //switch between print and digital images
    if (e.target.id === 'print') {
      this.setState({
        hasVisualClass: true,
      });
      console.log(this.page);
    } else if (e.target.id === 'digital') {
      this.setState({
        hasVisualClass: false,
      });
    }
  }
    // PRINT & DIGITAL
  showImage(e) {
    this.setState({
      imageClicked: true,
    });
    if (e.target.id === 'bloom') {
      this.setState({
        printData: BloomData,
      });
    } else if (e.target.id === 'churchill') {
      this.setState({
        printData: ChurchillData,
      });
    } else if (e.target.id === 'binet') {
      this.setState({
        printData: BinetData,
      });
    } else if (e.target.id === 'stn') {
      this.setState({
        digitalData: STNData,
      });
    } else if (e.target.id === 'tom-waits') {
      this.setState({
        digitalData: TomWaitsData,
      });
    } else if (e.target.id === 'zbar') {
      this.setState({
        digitalData: ZbarData,
      });
    }
  }
  hideImage(e) {
    this.setState({
      imageClicked: false,
    });
  }


  render() {
    const {
      //header props
      nav, 
      //portfolio props
      // WEB
      webData,
      // VISUAL
      hasVisualClass,
        // PRINT
      imageClicked,
      printData,
        //DIGITAL
      digitalData,
    } = this.state;

    return (
      <div className="App">

          <Header 
            nav={nav} 
            showHideNav={this.showHideNav}
            hideNav={this.hideNav} />

          <Home />

          <Portfolio 
            // WEB
            webData={webData}
            changeWebImage={this.changeWebImage}
            // VISUAL
            hasVisualClass={hasVisualClass}
            changeVisualImages={this.changeVisualImages}
              // PRINT
            printData={printData}
              // DIGITAL
            digitalData={digitalData}
              // PRINT & DIGITAL
            imageClicked={imageClicked}
            showImage={this.showImage}
            hideImage={this.hideImage} />
              

          <About />
          <Contact />
          {/* <SocialMedia /> */}
          
        <div className="footer">© Jeff Thomas 2017</div>
      </div>
    );
  }
}