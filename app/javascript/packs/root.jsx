import React from 'react';
import PropTypes from 'prop-types';

const Root = props => (
  <div>Hello {props.name}!</div>
)

Root.defaultProps = {
  name: 'David'
}

Root.propTypes = {
  name: PropTypes.string
}

export default Root;
