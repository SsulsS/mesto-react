import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return(
    <article className="element">
      <button type="button" className="element__delite"></button>
      <img className="element__place-photo" src={props.link} alt={props.name} title="Посмотреть в полном размере" onClick={handleClick}/>
      <div className="element__place">
        <h2 className="element__place-name">{props.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__button"></button>
          <p className="element__counter">{props.likes}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;