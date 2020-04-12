import React from 'react';

const spinner = ({ message }) => (
  <div className="ui active dimmer">
    <div className="ui big text loader">
      {message}
    </div>
  </div>
);
spinner.defaultProps = {
  message: 'Loading...',
};

spinner.propTypes = {
  message: PropTypes.string.isRequired,
},


export default spinner;
