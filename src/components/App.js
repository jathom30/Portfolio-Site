import React, { Component } from 'react';
import { TimelineLite } from 'gsap';

import PolyBackgroundUpper from '../assets/PolyBackgroundUpper';
import PolyBackgroundLower from '../assets/PolyBackgroundLower';

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
      windowWidth: window.innerWidth,
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
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    // this.updateWindowWidth = this.updateWindowWidth.bind(this);
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
    if (this.state.windowWidth < 950) {
      this.setState({
        nav: !this.state.nav,
      });
    }
  }
  hideNav(e) {
    if (this.state.windowWidth < 950) {
      this.setState({
        nav: true,
      });
    }
  }
  updateWindowWidth() {
    this.setState({ 
      windowWidth: window.innerWidth
    });
    if (this.state.windowWidth >= 950) {
      this.setState({
        nav: true,
      })
    }
  }
  // hamburger menu animation
  crossBuns() {
    const tl = new TimelineLite();
    tl
      .to("#top", .5, {y: '30px'})
      .to("#bottom", .5, {y: '-30px'}, 0)
      .to("#top", .3, {rotation: -45, transformOrigin: 'center'}, .3)
      .to("#bottom", .3, {rotation: 45, transformOrigin: 'center'}, .3)
      .to("#middle", .1, {autoAlpha: 0}, .2)
  }
  uncrossBuns() {
    const tl = new TimelineLite();
    tl
      .to("#top", .3, {rotation: 0})
      .to("#bottom", .3, {rotation: 0}, 0)
      .to("#top", .3, {y: 0}, .3)
      .to("#bottom", .3, {y: 0}, .3)
      .to("#middle", .5, {autoAlpha: 1}, .2)
  }
  //update current window width in state
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowWidth);
    if (this.state.windowWidth >= 950) {
      this.setState({
        nav: true,
      })
    }
  }
  componentDidUpdate() {
    if (this.state.windowWidth < 950) {
      if (this.state.nav) {
        this.crossBuns();
      } else {
        this.uncrossBuns();
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
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

          <PolyBackgroundUpper />
          <PolyBackgroundLower />

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
          
        <div className="footer">© Jeff Thomas 2017</div>
      </div>
    );
  }
}