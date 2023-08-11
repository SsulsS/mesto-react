import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `element__delite ${isOwn ? 'element__delite_visible' : ''}`
  );

  const cardLikeButtonClassName = (
    `element__button ${isLiked ? 'element__button_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return(
    
    <article className="element">
      <button className={cardDeleteButtonClassName} type="button" title="Удалить" onClick={handleDeleteClick}/>
      <img className="element__place-photo" src={props.link} alt={props.name} title="Посмотреть в полном размере" onClick={handleClick}/>
      
      <div className="element__place">
        <h2 className="element__place-name">{props.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" title="Нравится" onClick={handleLikeClick}/>
          <p className="element__counter">{props.likes}</p>
        </div>
      </div>
    </article>
  )
}
export default Card;