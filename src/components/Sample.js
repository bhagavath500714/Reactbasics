import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.any
};

const defaultProps = {
    name: 'Default name of App'
}

export class Sample extends Component {
  render() {
      const {title, name, onClick } = this.props;

    return (
      <div>
        <h1>Title: {title}</h1>
        <h2>Name: {name}</h2>
        <div onClick={onClick}>Click me</div>
      </div>
    )
  }
}

Sample.propTypes = propTypes;
Sample.defaultProps = defaultProps;

export default Sample
