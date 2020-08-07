import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Card({ card, onCardClick,}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(card => card._id === currentUser._id);

    return (
      <div id="card">
        <div className="element">
          <img
            src={card.link}
            alt={card.name}
            className="element__image"
            onClick={() => {
              onCardClick({
                title: card.name,
                url: card.link
              });
            }}
            />
          <div className="element__description">
            <h2 className="element__title">{card.name}</h2>
            <div className="element__like-container">
              <button type="submit" className={`element__like-button ${isLiked && 'element__like-button_active'}`}></button>
              <span className="element__like-counter">{card.likes.length}</span>
            </div>
          </div>
          <button type="submit" className={`element__delete-button ${isOwn && 'element__delete-button_visible'}`}></button>
        </div>
      </div>
    );
}

export default Card;