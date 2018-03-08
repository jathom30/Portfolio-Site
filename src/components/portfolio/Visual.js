import React, { Component } from 'react';

import Print from './Print';
import Digital from './Digital';

export default class Visual extends Component {

  render() {
    const { hasVisualClass, changeVisualImages } = this.props;
    // PRINT Props
    const { imageClicked, printData, digitalData, showImage, hideImage } = this.props;
    
    // change visual page between print and digital
    let visualPage = null;
    if (hasVisualClass) {
      visualPage =<Print 
                    imageClicked={imageClicked}
                    printData={printData}
                    showImage={showImage}
                    hideImage={hideImage} />
    } else {
      visualPage =<Digital 
                    imageClicked={imageClicked}
                    digitalData={digitalData}
                    showImage={showImage}
                    hideImage={hideImage} />
    }

    return (
      <div id="design" className='visual'>
        <div className="info">
          <h2>Graphic Design</h2>
          <p>In the past four years, I've created dozens of yearbooks working with elementary, specialty, and private schools. This involves presenting the client with different themes I've made and then customizing it further based on their requests.</p>
          <p>During this same time, I've created several show posters for Small Time Napoleon. Apart from creating our posters, I've created all our branding and merchandise imagery, allowing a gradual and consistent evolution of the band's brand.</p>
        </div>

        <div className="box">
          <div className="links">
            <a onClick={changeVisualImages} className={hasVisualClass ? 'active' : ''} id="print">print</a>
            <a onClick={changeVisualImages} className={!hasVisualClass ? 'active' : ''} id="digital">digital</a>
          </div>

          <div>
            { visualPage }
          </div>
        </div>

      </div>
    );
  }
}
