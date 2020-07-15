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
      <section className="popup popup_type_edit-profile">
        <div className="popup__content">
          <button className="popup__close-button popup__close-button_type_edit-profile" type="button"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form popup__form_type_edit-profile" noValidate>
            <input className="popup__input popup__input_type_name" name="name" type="text" id="name-input" required
                   minLength="2" maxLength="40" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+" />
            <span className='popup__input-error' id='name-input-error'></span>
            <input className="popup__input popup__input_type_description" name="description" type="text"
                   id="description-input"
                   required minLength="2" maxLength="200" />
            <span className='popup__input-error' id='description-input-error'></span>
            <button className="popup__button popup__button_type_save" type="submit">Сохранить</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_add-new-card">
        <div className="popup__content">
          <button className="popup__close-button popup__close-button_type_new-card" type="button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form popup__form_type_new-card" noValidate>
            <input className="popup__input popup__input_type_name" name="name" type="text" id="card-name-input"
                   required
                   minLength="1" maxLength="30" placeholder="Название места" />
            <span className='popup__input-error' id='card-name-input-error'></span>
            <input className="popup__input popup__input_type_description" type="url" name="link" type="text"
                   id="card-url-input"
                   required placeholder="Ссылка на картинку" pattern=".+\.(jpg|png)" />
            <span className='popup__input-error' id='card-url-input-error'></span>
            <button className="popup__button popup__button_type_add" type="submit">Создать</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_zoom-image">
        <figure className="popup__image-container">
          <button className="popup__close-button popup__close-button_type_zoom-image" type="button"></button>
          <img src="#" alt="" className="popup__zoom-image" />
          <figcaption className="popup__description"></figcaption>
        </figure>
      </section>
      <section className="popup popup_type_avatar-edit">
        <div className="popup__content">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form">
            <input className="popup__input popup__input_type_description" type="url" name="link" id="card-url-input"
                   required placeholder="Ссылка на картинку" pattern=".+\.(jpg|png)" />
            <span className='popup__input-error' id='card-url-input-error'></span>
            <button className="popup__button" type="submit">Сохранить</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_delete-card">
        <div className="popup__content">
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="popup__form">
            <button className="popup__button" type="submit">Да</button>
          </form>
        </div>
      </section>
    </main>
    );
  }
}