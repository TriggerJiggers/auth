import Header from "./Header";
import React, { Component } from "react";
import { connect } from 'react-redux';
import { verifyLogin } from '../actions/authActions';

class Landing extends Component {

  componentDidMount() {
    this.props.verifyLogin()
  }

  render() {
    return (
        <Header />
    );
  }

}

function mapDispatchToProps(dispatch) {
  return({
    verifyLogin: () => {dispatch(verifyLogin())}
  })
}
export default connect(null, mapDispatchToProps)(Landing)
