import React from 'react';
import TextAreaField from '../../fields/text-area';
import './styles.css';

class Form extends React.Component {
  // eslint-disable-next-line
  constructor() {
    super();
  }

  render() {
    return (
      <div className="form">
        <h1>Form</h1>

        <form>
          <TextAreaField name="json" />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
