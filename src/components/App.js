import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false
    }
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true })
  }

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true })
  }

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true })
  }

  render() {
  return (
      <div className="page">
        <Header />
        <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick}/>
        <PopupWithForm title="Редактировать профиль" name="edit-profile" isOpened={this.state.isEditProfilePopupOpen} children={
          <>
          <input className="popup__input popup__input_type_name" name="name" type="text" id="name-input" required
                 minLength="2" maxLength="40" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+" />
          <span className='popup__input-error' id='name-input-error'></span>
          <input className="popup__input popup__input_type_description" name="description" type="text"
          id="description-input"
          required minLength="2" maxLength="200" />
          <span className='popup__input-error' id='description-input-error'></span>
          </>
        } />
        <PopupWithForm title="Новое место" name="add-new-card" isOpened={this.state.isAddPlacePopupOpen} children={
          <>
            <input className="popup__input popup__input_type_name" name="name" type="text" id="card-name-input"
                   required
                   minLength="1" maxLength="30" placeholder="Название места"/>
            <span className='popup__input-error' id='card-name-input-error'></span>
            <input className="popup__input popup__input_type_description" type="url" name="link" type="text"
                   id="card-url-input"
                   required placeholder="Ссылка на картинку" pattern=".+\.(jpg|png)"/>
            <span className='popup__input-error' id='card-url-input-error'></span>
          </>
        } />
        <PopupWithForm title="Обновить аватар" name="avatar-edit" isOpened={this.state.isEditAvatarPopupOpen} children={
          <>
          <input className="popup__input popup__input_type_description" type="url" name="link" id="card-url-input"
                 required placeholder="Ссылка на картинку" pattern=".+\.(jpg|png)" />
            <span className='popup__input-error' id='card-url-input-error'></span>
          </>
        } />
        <PopupWithForm title="Вы уверены?" name="delete-card" />
        <ImagePopup />
        <Footer />
      </div>
    );
  }
}