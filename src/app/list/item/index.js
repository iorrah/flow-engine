import React from 'react';
import { FaAngleRight } from 'react-icons/lib/fa';
import './styles.css';

class Item extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  render() {
    return (
      <li className="item">
        <p className="text">
          Rule Title Goes here

          <small>Rule ID</small>
        </p>

        <div className="action">
          <FaAngleRight />
        </div>
      </li>
    );
  }
}

export default Item;
