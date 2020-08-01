import React from 'react';
import cousteauPath from '../images/cousteau.jpg';
import { api } from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [userName, setUserName] = React.useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исселдователь океана');
    const [userAvatar, setUserAvatar] = React.useState('Исселдователь океана');
    const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((error) => console.error(error));
  });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-background" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt=''/>
          </div>
          <div className="profile__data">
            <div className="profile__wrap">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map((card, i) =>
          <Card key={card._id} onCardClick={onCardClick} title={card.name} url={card.link} likes={card.likes.length}/>
        )}
      </section>
    </main>
  );
}

export default Main;