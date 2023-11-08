import imgOk from "../../images/status-ok.svg";
import imgErr from "../../images/status-error.svg";
import "./PopupInfo.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function PopupInfo({ closePopup }) {

  const { value2 } = useContext(CurrentUserContext);
  const [popupInfo] = value2;

  return (
    <div
      onMouseDown={closePopup}
      className={
        popupInfo.error || popupInfo.ok ? "popup popup_opened" : "popup"
      }
    >
      <div className="popup__container">
        <button
          onClick={closePopup}
          type="button"
          aria-label="Закрыть окно сообщения"
          className="popup__close-icon"
        />
        {popupInfo.ok && (
          <>
            <img
              alt="картинка ок"
              className="popup__image"
              src={imgOk}
            />
            <h2 className="popup__title">{popupInfo.title}</h2>{" "}
          </>
        )}
        {popupInfo.error && (
          <>
            <img
              alt="картинка ошибка"
              className="popup__image"
              src={imgErr}
            />
            <h2 className="popup__title">{popupInfo.title}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default PopupInfo;
