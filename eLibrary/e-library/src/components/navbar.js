import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light   navbar-expand-lg" style = {{backgroundColor: '#cddc39'}}>
        <Link to="/" className="navbar-brand">eLibrary</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/read" className="nav-link">Read</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}