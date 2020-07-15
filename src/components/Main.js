import React from 'react';
import cousteauPath from '../images/cousteau.jpg';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar-background" onClick={this.props.onEditAvatar}>
            <img className="profile__avatar" src={cousteauPath} alt=''/>
          </div>
          <div className="profile__data">
            <div className="profile__wrap">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" onClick={this.props.onEditProfile}></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={this.props.onAddPlace}></button>
      </section>
      <section className="elements">
      </section>
    </main>
    );
  }
}