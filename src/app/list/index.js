import React from 'react';
import './styles.css';
import Item from './item';

class List extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  render() {
    return (
      <div className="list">
        <h1>List</h1>

        <ul>
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
