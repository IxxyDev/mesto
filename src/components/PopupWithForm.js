import React from 'react';

export default class PopupWithForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.onClose);
    return (
      <section className={this.props.isOpened ? `popup popup_type_${this.props.name} popup_is-opened` : `popup popup_type_${this.props.name}`}>
        <div className="popup__content">
          <button className="popup__close-button popup__close-button_type_edit-profile" onClick={this.props.onClose} type="button"></button>
          <h3 className="popup__title">{this.props.title}</h3>
          <form className="popup__form popup__form_type_edit-profile" name={this.props.name} noValidate>
            {this.props.children}
            <button className="popup__button popup__button_type_save" type="submit">Сохранить</button>
          </form>
        </div>
      </section>
    )
  }
}