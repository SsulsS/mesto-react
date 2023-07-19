import React, {useEffect} from "react";
import api from "./Api.js"
import Card from "./Card";
import pen from "../images/logo/pen.svg";
import krest from "../images/logo/krest.svg"

function Main(props) {

  const [userInfo, setUserInfo] = React.useState({})
  const [cards, setCards] = React.useState([])
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      setUserInfo(profileInfo)
      setCards(card)
    }).catch((err) => {
      console.error(err);
    })
  }, [])

  return (
    <main className="content">

        <section className="profile">
            <div className="profile__container">
                <button className="profile__avatar-button" type="button" title="Обновить аватар" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userInfo.avatar} alt={userInfo.name}/>
                </button>
                <div className="profile__info">
                        <h1 className="profile__name">{userInfo.name}</h1>
                        <button type="button" className="profile__edit-button" title="Редактировать профиль" onClick={props.onEditProfile}><img src={pen} alt="редактировать" className="profile__edit-button-image"/></button>    
                        <p className="profile__activity">Исследователь океана</p>
                </div>
            </div>
                <button type="button" className="profile__add-button" title="Добавить новую фотографию" onClick={props.onAddPlace}><img src={krest} alt="добавить" className="profile__add-button-image"/></button>
        </section>
      <section className="elements">
          {cards.map((card, id) => (
            <Card
              key={id}
              card={card}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
            />
          ))}   
      </section>
    </main>
  )
}

export default Main;

