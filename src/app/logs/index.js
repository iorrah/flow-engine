import React from 'react';
import Log from './log';
import './styles.css';

class Logs extends React.Component {
  constructor() {
    super();

    this.state = {
      logs: []
    }
  }

  render() {
    return (
      <div className="logs">
        <h1>Logs</h1>

        <div className="items">
          <Log type="suc" />
          <Log type="err" />
          <Log type="suc" />
          <Log type="war" />
        </div>
      </div>
    );
  }
}

export default Logs;
