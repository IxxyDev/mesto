import React from 'react';
import cousteauPath from '../images/cousteau.jpg';
import { api } from '../utils/Api';
import Card from './Card';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Жак-Ив Кусто',
      userDescription: 'Исселдователь океана',
      userAvatar: cousteauPath,
      cards: []
    }
  }

  componentDidMount() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        this.setState({
          userName: user.name,
          userDescription: user.about,
          userAvatar: user.avatar,
          cards,
        })
      })
      .catch((error) => console.error(error));
  }


  render() {
    const { onEditAvatar, onEditProfile, onAddPlace, onCardClick } = this.props;
    return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-background" onClick={onEditAvatar}>
            <img className="profile__avatar" src={this.state.userAvatar} alt=''/>
          </div>
          <div className="profile__data">
            <div className="profile__wrap">
              <h1 className="profile__name">{this.state.userName}</h1>
              <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{this.state.userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {this.state.cards.map((card, i) =>
          <Card key={card._id} onCardClick={onCardClick} title={card.name} url={card.link} likes={card.likes.length}/>
        )}
      </section>
    </main>
    );
  }
}