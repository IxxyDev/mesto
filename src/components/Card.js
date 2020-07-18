import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div id="card">
        <div className="element">
          <img
            src={this.props.url}
            alt={this.props.title}
            className="element__image"
            onClick={() => {
              this.props.onCardClick({
                title: this.props.title,
                url: this.props.url,
              });
            }}
            />
          <div className="element__description">
            <h2 className="element__title">{this.props.title}</h2>
            <div className="element__like-container">
              <button type="submit" className="element__like-button"></button>
              <span className="element__like-counter">0</span>
            </div>
          </div>
          <button type="submit" className="element__delete-button"></button>
        </div>
      </div>
    );
  }
}