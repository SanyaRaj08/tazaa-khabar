import React, { Component } from "react";
import {
  Link
} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Tazaa-Khabar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                    general
                  </Link>
                </li>
                
                <li className="nav-item" >
                  <Link className="nav-link" to="/Business">
                    business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Entertainment">
                    entertainment
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/Health">
                    health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Science">
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Technology">
                    technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
