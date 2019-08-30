import React, { Component } from "react";
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Sidebar extends Component {

  handleLogoutClick = event => {
    window.open("http://localhost:4000/auth/logout", "_self");
    this.props.logoutUser()
  }

  render() {
    return (
      <ul className="menu">
        <h1>Welcome to the dashboard {this.props.user.username}</h1>
        <li onClick={this.handleLogoutClick}>Logout</li>
      </ul>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  };
};

function mapStateToProps(state) {
  return {
      user: state.auth.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
