function ImagePopup(props) {
    return (
      <section className={`popup card-open" ${props.card ? 'popup_opened' : ''}`}>
        <div className="popup__overlay card-open__overlay" onClick={props.onClose}></div>
        <div className="card-open__container">
          <img className="popup__image" src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''}/>
          <h2 className="popup__description">{props.card ? props.card.name : ''}</h2>
          <button className="popup__close-button" type="button" title="Закрыть" onClick={props.onClose}/>
        </div>
      </section>
    )
  }
  
  export default ImagePopup;