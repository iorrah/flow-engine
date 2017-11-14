import React from 'react';
import './styles.css';
import List from '../list';

class Home extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  render() {
    return (
      <main className="home">
        <div className="wrapper">
          <div className="line">
            <div className="fit fit-1 fit-hidden-xs">
              &nbsp;
            </div>

            <div className="fit fit-8">
              <List />
            </div>

            <div className="fit fit-1 xs-fit-0">
              &nbsp;
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
