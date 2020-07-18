import React from 'react';

export default class ImagePopup extends React.Component {
  render() {
    return (
      <section className={`popup popup_type_zoom-image ${this.props.isOpened && "popup_is-opened"}`}>
        <figure className="popup__image-container">
          <button className="popup__close-button popup__close-button_type_zoom-image" type="button" onClick={this.props.onClose}></button>
          <img src={this.props.card.url} alt={this.props.card.title} className="popup__zoom-image" />
          <figcaption className="popup__description">{this.props.card.title}</figcaption>
        </figure>
      </section>
    );
  }
}