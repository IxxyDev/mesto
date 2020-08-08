import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [isImagePopupOpen, setImagePopup] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [image, setImage] = React.useState({
    link: '',
    name: ''
  });


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  function handleLikeCard(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    api.likeCard(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map(c => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter(c => c._id !== card._id);
        setCards(newCards);
      })
      .catch(err => console.log(err));
  }

  function handleUpdateUser(userData) {
    api.changeUserInfo(userData.name, userData.about)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleAddPlace(cardData) {
    api.addCard(cardData.name, cardData.link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups()
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(avatarData) {
    api.changeUserAvatar(avatarData)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups()
      })
      .catch(err => console.log(err));
  }

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
              onCardClick={handleCardClick}
              onCardLike={handleLikeCard}
              onCardDelete={handleCardDelete}
              cards={cards}
        />
        <EditProfilePopup
          onClose={closeAllPopups}
          isOpened={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          onClose={closeAllPopups}
          isOpened={isEditAvatarPopupOpen}
          onUpdateUser={handleUpdateAvatar}
        />
        <AddPlacePopup
          onClose={closeAllPopups}
          isOpened={isAddPlacePopupOpenPopupOpen}
          onUpdateUser={handleAddPlace}
        />
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
        <PopupWithForm title="Вы уверены?" name="delete-card" btnText={'Да'} />
        <ImagePopup card={selectedCard}
                    onClose={closeAllPopups}
                    isOpened={isImagePopupOpen} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;