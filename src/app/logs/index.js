import React from 'react';
import Log from './log';
import './styles.css';

class Logs extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  render() {
    return (
      <div className="logs">
        <h1>Logs</h1>

        <div>
          <Log />
          <Log />
          <Log />
          <Log />
        </div>
      </div>
    );
  }
}

export default Logs;
