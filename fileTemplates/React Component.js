import React, { Component, PropTypes } from 'react';

class ${NAME} extends Component {
  static propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    name: 'Jack',
  };
  render() {
    return (
        <div className="mtfe-react-bootstrap">
        <h1 className="demo-wrapper" onClick={this.props.onClick}>Hello, {this.props.name}</h1>
        </div>
        );
  }
}

export default ${NAME};
