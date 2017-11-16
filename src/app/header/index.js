import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <Link
            to="/"
            className="logo"
          >
            Flow Engine
          </Link>

          <div className="links">
            <Link
              to="/"
              className="btn btn-link btn-link-white"
            >
              List
            </Link>

            <Link
              to="/create-rule"
              className="btn btn-link btn-link-white"
            >
              Create
            </Link>

            <Link
              to="/execute-flows"
              className="btn btn-link btn-link-white pr-0"
            >
              Execute
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
