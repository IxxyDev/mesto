import React from 'react';

export default class ImagePopup extends React.Component {
  render() {
    const { isOpened, card, onClose } = this.props;

    return (
      <section className={`popup popup_type_zoom-image ${isOpened && "popup_is-opened"}`}>
        <figure className="popup__image-container">
          <button className="popup__close-button popup__close-button_type_zoom-image" type="button" onClick={onClose}></button>
          <img src={card.url} alt={card.title} className="popup__zoom-image" />
          <figcaption className="popup__description">{card.title}</figcaption>
        </figure>
      </section>
    );
  }
}