import React from 'react';
import TextAreaField from '../../fields/text-area';
import './styles.css';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      parameter: ''
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
            <TextAreaField
              name="parameter"
              label="Parameter"
              value={this.state.parameter}
              onChange={this.onChange}
              stateness="parameter"
            />
          </div>

          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
