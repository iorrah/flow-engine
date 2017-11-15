import React from 'react';
import './styles.css';

class Log extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  getClassName() {
    let className = 'log';
    return `${className} ${this.props.type}`;
  }

  render() {
    let className = this.getClassName();

    return (
      <div className={className}>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
    );
  }
}

export default Log;
