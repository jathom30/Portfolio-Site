import React, { Component } from 'react';

import Print from './Print';
import Digital from './Digital';

export default class Visual extends Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.state = {
      page: <Print />,
      hasClass: true,
    }
  }

  changeSection(e) {
    if (e.target.id === 'print') {
      this.setState({
        page: <Print />,
        hasClass: true,
      });
      console.log(this.page);
    } else if (e.target.id === 'digital') {
      this.setState({
        page: <Digital />,
        hasClass: false,
      });
    }
  }


  render() {
    const { page, hasClass } = this.state;

    return (
      <div className='visual'>
        <div className="info">
          <h2>Graphic Design</h2>
          <p>In the past four years, I've created dozens of yearbooks working with elementary, specialty, and private schools. This involves presenting the client with different themes I've made and then customizing it further based on their requests.</p>
          <p>During this same time, I've created several show posters for Small Time Napoleon. Apart from creating our posters, I've created all our branding and merchandise imagery, allowing a gradual and consistent evolution of the band's brand.</p>
        </div>

        <div className="box">
          <div className="links">
            <a onClick={this.changeSection} className={hasClass ? 'active' : ''} id="print">print</a>
            <a onClick={this.changeSection} className={!hasClass ? 'active' : ''} id="digital">digital</a>
          </div>

          <div>
            {page}
          </div>
        </div>

      </div>
    );
  }
}
