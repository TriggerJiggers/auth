import React, { Component } from "react";
import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { verifyLogin } from '../actions/authActions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.verifyLogin()
  }

  render() {
    return (
      <Sidebar />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return({
    verifyLogin: () => {dispatch(verifyLogin)}
  })
}
export default connect(null, mapDispatchToProps)(Dashboard)
