import React, { Component } from 'react';

export default class Audio extends Component {
  render() {
    return(
      <div>
        <h2>Audio</h2>
        <p>I've had the opportunity to perform with my band, <a href="http://smalltimenapoleon.com">Small Time Napoleon</a>, since our conception in 2013. We've been featured on NPR's World Cafe as one of "Louisville's 5 Best Local Acts", awarded two Louisville Music Awards for "Best Avant Garde/Jazz Band" in 2015 and 2017, and called "one of the most unique and exciting bands to come out of Louisville in a very long time" by WFPK's Assistant Program Director, Laura Shine.</p>
        <div className="iframes">
          <iframe title="Dear L Audio" style={ {border: '0', width: '100%', height: '42px'} } src="https://bandcamp.com/EmbeddedPlayer/album=1293610731/size=small/bgcol=fbfbff/linkcol=5058CF/track=1281974692/transparent=true/" seamless><a href="http://smalltimenapoleon.bandcamp.com/album/too-big-to-fail">Too Big To Fail by Small Time Napoleon</a></iframe>
          <iframe title="High Wire Audio" style={ {border: '0', width: '100%', height: '42px'} } src="https://bandcamp.com/EmbeddedPlayer/album=1293610731/size=small/bgcol=ffffff/linkcol=0687f5/track=892552666/transparent=true/" seamless><a href="http://smalltimenapoleon.bandcamp.com/album/too-big-to-fail">Too Big To Fail by Small Time Napoleon</a></iframe>
          <iframe title="Go Outside Audio" style={ {border: '0', width: '100%', height: '42px'} } src="https://bandcamp.com/EmbeddedPlayer/album=344031981/size=small/bgcol=ffffff/linkcol=0687f5/track=2779511737/transparent=true/" seamless><a href="http://lewisliveshere.bandcamp.com/album/every-little-thing">Every Little Thing by Justin Paul Lewis</a></iframe>
        </div>

      </div>
    )
  }
};