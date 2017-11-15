import React from 'react';
import './styles.css';
import Form from './form';

class CreateRule extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  render() {
    return (
      <main className="create-rule">
        <div className="wrapper">
          <div className="line">
            <div className="fit fit-3 fit-hidden-xs">
              &nbsp;
            </div>

            <div className="fit fit-4">
              <Form />
            </div>

            <div className="fit fit-3 xs-fit-0">
              &nbsp;
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default CreateRule;
