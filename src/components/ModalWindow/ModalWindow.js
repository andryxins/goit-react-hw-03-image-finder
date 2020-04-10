import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ModalWindow extends Component {
  static defaultProps = {
    openImg: '',
  };

  static propTypes = {
    openImg: PropTypes.string,
  };
  overLayRef = React.createRef();

  closeByEsc = e => {
    const { onClose } = this.props;

    if (e.code === 'Escape') onClose();
  };

  closeByClick = e => {
    const { onClose } = this.props;

    if (e.target !== e.currentTarget) return;
    onClose();
  };

  componentDidMount() {
    const { current } = this.overLayRef;

    current.addEventListener('click', this.closeByClick);
    window.addEventListener('keyup', this.closeByEsc);
  }

  componentWillUnmount() {
    const { current } = this.overLayRef;

    current.removeEventListener('click', this.closeByClick);
    window.removeEventListener('keyup', this.closeByEsc);
  }

  render() {
    const { openImg } = this.props;
    return (
      <div ref={this.overLayRef} className="Overlay">
        <div className="Modal">
          <img src={openImg} alt="" />
        </div>
      </div>
    );
  }
}
