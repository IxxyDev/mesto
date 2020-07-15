import React from 'react';

export default class ImagePopup extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="popup popup_type_zoom-image">
        <figure className="popup__image-container">
          <button className="popup__close-button popup__close-button_type_zoom-image" type="button"></button>
          <img src="#" alt="" className="popup__zoom-image" />
          <figcaption className="popup__description"></figcaption>
        </figure>
      </section>
    );
  }
}