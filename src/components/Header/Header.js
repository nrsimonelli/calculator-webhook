import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
    return (
      <div className='root-header'>
        <p>Live Calculator</p>
      </div>
    ) // end return
  } // end render
} // end class

export default connect()(Header);