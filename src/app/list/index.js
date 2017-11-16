import React from 'react';
import './styles.css';
import Item from './item';

class List extends React.Component {
  constructor() {
    super();

    this.state = {
      lits: []
    }
  }

  render() {
    return (
      <div className="list">
        <h1>Rules list</h1>

        <ul className="items">
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
      </div>
    );
  }
}

export default List;
