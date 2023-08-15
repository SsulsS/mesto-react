import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import pen from "../images/logo/pen.svg";
import krest from "../images/logo/krest.svg"

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">

        <section className="profile">
            <div className="profile__container">
                <button className="profile__avatar-button" type="button" title="Обновить аватар" onClick={props.onEditAvatar}>
                  <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name}/>
                </button>
                <div className="profile__info">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button type="button" className="profile__edit-button" title="Редактировать профиль" onClick={props.onEditProfile}><img src={pen} alt="редактировать" className="profile__edit-button-image"/></button>    
                        <p className="profile__activity">{currentUser.about}</p>
                </div>
            </div>
                <button type="button" className="profile__add-button" title="Добавить новую фотографию" onClick={props.onAddPlace}><img src={krest} alt="добавить" className="profile__add-button-image"/></button>
        </section>
      <section className="elements">
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
            />
          ))}   
      </section>
    </main>
  )
}

export default Main;

