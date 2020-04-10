import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem imagesArr={images} onOpenModalClick={onOpenModal} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func,
};

export default ImageGallery;
