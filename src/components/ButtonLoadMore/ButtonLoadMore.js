import React from 'react';
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ btnAction }) => (
  <button onClick={btnAction} type="button" className="Button">
    Load More
  </button>
);

ButtonLoadMore.propType = {
  btnAction: PropTypes.func,
};

export default ButtonLoadMore;
