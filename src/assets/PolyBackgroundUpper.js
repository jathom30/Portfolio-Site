import React, { Component } from 'react';

export default class PolyBackgroundUpper extends Component {

  // $(window).scroll(function() {
  //   parallaxDiv();
  //   // scrollAddClass('.logo', 1.2, 'logo-in');

  // });
  
  //   function parallax(chosenClass, xy, mult=1) {
  //     var wScroll = $(window).scrollTop();
  //     $(chosenClass).css('background-position-' + xy, (wScroll * mult) + 'px');    
  //   }


  // function parallaxDiv() {
  //   var wScroll = $(window).scrollTop();
  //     $('.mission-statement').css('margin-top', -50 + (-(wScroll * .25)) + 'px');
  // }
  componentDidMount() {
    window.scrollTo(100,0);
  }
  
  render() {
    return (
      <svg className="poly-background-upper" xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="288" height="1032.047" viewBox="0 0 288 1032.047">
        <path fill="#4AB7DD" d="M184.719 606.65L156.94 728.87l-102.22 110L0 728.69V626.23l70.279-110.209zM288 745.021v87.009l-25.5 69.061-131.11 58.889-76.67-40 71.11-110 115.559-84.44zM288 434.681V660.54l-63.281-13.89V492.201zM161.389 392.201l-9.999 100-118.89-10L0 451.621V246.19l26.939-40.649 62.23 75.549zM288 115.201v259.23h-33.281l-40-25.56-85.55-161.111 55.55-108.889 76.67-45.56zM144 18.871L78.06 167.76 0 127.291V0h142.52zM142.52 1032.047L0 1032.051v-75.58l85.83 13.509zM288 963.29v68.761h-99.241l-14.04-55.401 66.67-36.67zM188.759 0l19.825 28.548L288 0z"/>
      </svg>
    )
  }
}