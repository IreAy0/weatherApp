import React from 'react';
import PropTypes from 'prop-types';

const spinner = ({ message }) => (
  <div className="ui active dimmer">
    <div className="ui big text loader">
      {message}
    </div>
  </div>
);

spinner.propTypes = {
  message: PropTypes.string.isRequired,
};
export default spinner;
