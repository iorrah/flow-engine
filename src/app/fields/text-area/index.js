import React from 'react';
import './styles.css';

class TextArea extends React.Component {
  render() {
    return (
      <div className="field text-area">
        <label>{this.props.label}</label>

        <textarea
          name={this.props.name}
          id={this.props.name}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default TextArea;
