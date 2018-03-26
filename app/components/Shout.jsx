import React from 'react';
import PropTypes from 'prop-types';

import capitalize from '../pipes/capitalize';

const Shout = ({ name }) => {
  return (
    <div>HELLO, { name | capitalize }</div>
  );
};

Shout.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Shout;
