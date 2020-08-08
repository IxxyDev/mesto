import React from 'react';

import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditAvatarPopup({ isOpened, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
        avatar: avatarRef.current.value
      }
    );
  }


  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar-edit"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <>
        <input className="popup__input popup__input_type_description"
               type="url"
               name="link"
               id="avatar-url-input"
               required
               placeholder="Ссылка на картинку"
               pattern=".+\.(jpg|png)" />
        <span className='popup__input-error' id='avatar-url-input-error'></span>
      </>
    </PopupWithForm>
  )
}