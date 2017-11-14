import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <Link to="/" className="logo">
            Flow Engine
          </Link>

          <Link to="/create-rule" className="btn btn-link pull-right">
            Create Rule
          </Link>

          <Link to="/execute-flows" className="btn btn-link pull-right">
            Execute Flows
          </Link>

          <Link to="/" className="btn btn-link pull-right">
            Home
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
