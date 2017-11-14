import React from 'react';
import TextField from '../../fields/text';
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
          <TextField name="id" />
          <TextField name="title" />
          <TextAreaField name="function" />
          <TextField name="id-true" />
          <TextField name="id-false" />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
