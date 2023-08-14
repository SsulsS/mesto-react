function ImagePopup(props) {
  return (
    <section  className={`popup card-open" ${props.card ? 'popup_opened' : ''}`} onClick={props.onCloseClick}>
      <div className="popup__overlay card-open__overlay" onClick={props.onClose}></div>
      <div className="card-open__container">
        <button className="popup__close-button" type="button" title="Закрыть" onClick={props.onClose}/>
        <img className="card-open__image" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''}/>
        <h2 className="card-open__label">{props.card ? props.card.name : ''}</h2>z
      </div>
    </section>
  )
}
export default ImagePopup;