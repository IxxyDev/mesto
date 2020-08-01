import React from 'react';

function Card({ title, url, onCardClick, likes}) {
    return (
      <div id="card">
        <div className="element">
          <img
            src={url}
            alt={title}
            className="element__image"
            onClick={() => {
              onCardClick({
                title: title,
                url: url,
              });
            }}
            />
          <div className="element__description">
            <h2 className="element__title">{title}</h2>
            <div className="element__like-container">
              <button type="submit" className="element__like-button"></button>
              <span className="element__like-counter">{likes}</span>
            </div>
          </div>
          <button type="submit" className="element__delete-button"></button>
        </div>
      </div>
    );
}

export default Card;