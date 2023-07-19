function PopupWithForm(props) {
  return (
    <div className={`popup ${props.name} ${props.isOpen ? `popup_opened`: ""}`}>
      <div className="popup__overlay avatar-popup__overlay" onClick={props.onClose}></div>
      <div className="popup__container">
        <form className="popup__form" name={props.form}>
          <h2 className="popup__title">{props.title}</h2>
          <fieldset className="popup__set">
          {props.children}
          </fieldset>
          <button className="popup__button" type="submit" title="Сохранить">Сохранить</button>
        </form>
        <button className="popup__close-button" type="button" title="Закрыть" onClick={props.onClose}/>
      </div>
    </div>
  )
}

export default PopupWithForm;