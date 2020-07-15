import React from 'react';
import cousteauPath from '../images/cousteau.jpg';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEditAvatarClick = () => {
    const popupEditAvatar = document.querySelector('.popup_type_avatar-edit');
    popupEditAvatar.classList.add('popup_is-opened');
  }

  handleEditProfileClick = () => {
    const popupEditProfile = document.querySelector('.popup_type_edit-profile');
    popupEditProfile.classList.add('popup_is-opened');
}

  handleAddPlaceClick = () => {
    const popupAddPlace = document.querySelector('.popup_type_add-new-card');
    popupAddPlace.classList.add('popup_is-opened');
  }

  render() {
    return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-background" onClick={this.handleEditAvatarClick}>
            <img className="profile__avatar" src={cousteauPath} alt=''/>
          </div>
          <div className="profile__data">
            <div className="profile__wrap">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" onClick={this.handleEditProfileClick}></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={this.handleAddPlaceClick}></button>
      </section>
      <section className="elements">
      </section>
      <section className="popup popup_type_zoom-image">
        <figure className="popup__image-container">
          <button className="popup__close-button popup__close-button_type_zoom-image" type="button"></button>
          <img src="#" alt="" className="popup__zoom-image" />
          <figcaption className="popup__description"></figcaption>
        </figure>
      </section>
    </main>
    );
  }
}