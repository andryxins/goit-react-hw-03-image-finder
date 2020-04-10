import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imagesArr, onOpenModalClick }) => {
  return (
    <Fragment>
      {imagesArr.map(({ id, webformatURL, tags }) => (
        <li
          onClick={() => onOpenModalClick(id)}
          key={id}
          className="ImageGalleryItem"
        >
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </Fragment>
  );
};

ImageGalleryItem.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
  onOpenModalClick: PropTypes.func,
};

export default ImageGalleryItem;
