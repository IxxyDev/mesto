import React from 'react';
import cousteauPath from '../images/cousteau.jpg';
import { api } from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

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
  }


  React.useEffect(() => {
    api.getInitialCards()
      .then(cards => {
        setCards(cards);
      })
      .catch((error) => console.error(error));
  });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-background" onClick={onEditAvatar}>
            <img className="profile__avatar" src={currentUser.avatar} alt='' />
          </div>
          <div className="profile__data">
            <div className="profile__wrap">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card, i) =>
          <Card key={card._id} onCardClick={onCardClick} onCardLike={handleLikeCard} onCardDelete={handleCardDelete} card={card}/>
        )}
      </section>
    </main>
  );
}

export default Main;