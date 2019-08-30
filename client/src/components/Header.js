import React, { Component } from "react";

export default class Header extends Component {

  _handleSignInClick = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  render() {
    return (
      <ul className="menu">
        <li onClick={this._handleSignInClick}>Login</li>
      </ul>
    );
  }

}
