import PropTypes from "prop-types";
import React, { Component } from "react";
import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { verifyLogin } from '../actions/authActions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.dispatch(verifyLogin());
  }

  render() {
    return (
      <Sidebar />
    );
  }
}

const mapDispatchToProps = {
  verifyLogin,
}

export default connect(null, mapDispatchToProps)(Dashboard)
