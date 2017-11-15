import React from 'react';
import '../styles.css';
import './styles.css';

class Text extends React.Component {
  getClassName(value) {
    let className = "entry text";

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
        <input
          id={name}
          type="text"
          name={name}
          value={value}
          autoComplete="off"
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

export default Text;
