/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const path = this.props.location.pathname.slice(1)
    const pathname = path.charAt(0).toUpperCase() + path.slice(1)
    return (
      <div>
        <h1 id="headerID">Welcome!</h1>
        <h2 id="headerID">{pathname}</h2>
      </div>
    );
  }
}

export default withRouter(Header);