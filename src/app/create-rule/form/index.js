import React from 'react';
import TextField from '../../fields/text';
import TextAreaField from '../../fields/text-area';
import './styles.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      title: '',
      function: '',
      id_true: '',
      id_false: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let element = event.target;
    let stateAttr = element.attributes['stateness'].value;
    this.setState({ [stateAttr]: element.value });
  }

  render() {
    return (
      <div className="form">
        <h1>Form</h1>

        <form>
          <div className="mb-3">
            <TextField
              name="id"
              label="ID"
              value={this.state.id}
              onChange={this.onChange}
              stateness="id"
            />

            <TextField
              name="title"
              label="Title"
              value={this.state.title}
              onChange={this.onChange}
              stateness="title"
            />

            <TextAreaField
              name="function"
              label="Function"
              value={this.state.function}
              onChange={this.onChange}
              stateness="function"
            />

            <TextField
              name="id-true"
              label="ID True"
              value={this.state.id_true}
              onChange={this.onChange}
              stateness="id_true"
            />

            <TextField
              name="id-false"
              label="ID False"
              value={this.state.id_false}
              onChange={this.onChange}
              stateness="id_false"
            />
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
