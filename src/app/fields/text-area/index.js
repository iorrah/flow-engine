import React from 'react';
import '../styles.css';
import './styles.css';

class TextArea extends React.Component {
  getClassName(value) {
    let className = "entry area";

    if (value) {
      className += " has-value"
    }

    return className;
  }

  render() {
    let { value, name } = this.props;
    let className = this.getClassName(value);

    return (
      <div className="field text-area">
        <textarea
          id={name}
          name={name}
          value={value}
          className={className}
          onChange={this.props.onChange}
          stateness={this.props.stateness}
        />

        <label className="descr">
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default TextArea;
