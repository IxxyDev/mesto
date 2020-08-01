import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, setImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then(user => setCurrentUser(user)).catch(err => console.log(err));
  })

  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopup(true);
  }

  function closeAllPopups () {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setImagePopup(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}/>
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <>
            <input className="popup__input popup__input_type_name" name="name" type="text" id="name-input" required
                 minLength="2" maxLength="40" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+[^\s\-]+" />
            <span className='popup__input-error' id='name-input-error'></span>
            <input className="popup__input popup__input_type_description"
                   name="description"
                   type="text"
                   id="description-input"
                   required minLength="2"
                   maxLength="200" />
            <span className='popup__input-error' id='description-input-error'></span>
          </>
        </PopupWithForm>
        <PopupWithForm title="Новое место"
                       name="add-new-card"
                       isOpened={isAddPlacePopupOpen}
                       onClose={closeAllPopups}>
          <>
            <input className="popup__input popup__input_type_name"
                   name="name" type="text" id="card-name-input"
                   required
                   minLength="1"
                   maxLength="30"
                   placeholder="Название места"/>
            <span className='popup__input-error' id='card-name-input-error'></span>
            <input className="popup__input popup__input_type_description"
                   type="url" name="link"
                   type="text"
                   id="card-url-input"
                   required placeholder="Ссылка на картинку"
                   pattern=".+\.(jpg|png)"/>
            <span className='popup__input-error' id='card-url-input-error'></span>
          </>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="avatar-edit"
          isOpened={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <>
          <input className="popup__input popup__input_type_description"
                 type="url" name="link" id="card-url-input"
                 required
                 placeholder="Ссылка на картинку"
                 pattern=".+\.(jpg|png)" />
            <span className='popup__input-error' id='card-url-input-error'></span>
          </>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="delete-card" />
        <ImagePopup card={selectedCard}
                    onClose={closeAllPopups}
                    isOpened={isImagePopupOpen} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;