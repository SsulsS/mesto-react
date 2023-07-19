import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          form={'profileData'}
          title={'Редактировать профиль'}
          name={'edit'}
          children={(
            <>
            <label className="popup__label">
              <input className="popup__input" id="profile_name" name="profile_name" type="text" placeholder="Имя" minLength="2" maxLength="40" required/>
              <span className="popup__input-error" id="profile_name-error"/>
              </label>
              <label className="popup__label">
              <input className="popup__input" id="profile_description-error" name="profile_description-error" type="text" placeholder="О себе" minLength="2" maxLength="200" required/>
              <span className="popup__input-error" id="profile_description-error"/>
              </label>
            </>
          )}
        />

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          form={'placeData'}
          title={'Новое место'}
          name={'add'}
          children={(
            <>
              <label className="popup__label">
                <input className="popup__input" id="place_name" name="name" type="text" placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="popup__input-error" id="place_name-error"/>
              </label>
              <label className="popup__label">
                <input className="popup__input" id="place_link" name="link" type="url" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error" id="place_link-error"/>
              </label>
            </>
          )}
        />

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          form={'placeData'}
          title={'Обновить аватар'}
          name={'avatar'}
          children={(
            <>
              <input className="popup__input" id="avatar_link" name="avatar_link" type="url" placeholder="Ссылка на аватар" required/>
              <span className="popup__input-error" id="avatar_link-error"/>
            </>
          )}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
    </>
  );
}

export default App;
    