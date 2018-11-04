import React, { Component } from 'react';
import AuthA from './../../store/action/AuthA';

import { connect } from 'react-redux';
import GQL from '../graphql/Graph';
import PropTypes from 'prop-types';

class NavbarC extends Component {
  logout = () => {
    this.props.authFn.logout();
  };

  render() {
    const auth = this.props.auth;

    const authLinks = (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a href="/" className="navbar-brand">
          CriticizeKing
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );

    return <div>{auth ? authLinks : ''}</div>;
  }
}

NavbarC.propTypes = {
  auth: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.AuthR.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authFn: AuthA(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarC);
