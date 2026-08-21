import useLanguage from "../../hooks/useLanguage";

export default function ErrorModal({ setShowedModal, data }) {
  const handleClose = () => {
    setShowedModal({ modal: "none", data: {} });
  };
  const { t } = useLanguage();
  const { errorCode, to } = data;
  const finalErrorCode = t.errors[errorCode] ? errorCode : "SERVER_ERROR";

  const error = t.errors[finalErrorCode];
  const { heading, sub, button } = error;
  let targetModal;
  switch (finalErrorCode) {
    case "SERVER_ERROR":
      targetModal = "none";
      break;
    case "INVALID_TOKEN":
    case "TOKEN_REQUIRED":
    case "TOKEN_EXPIRED":
      targetModal = "sign";
      break;
    default:
      targetModal = to;
  }
  const handleTransfer = () => {
    setShowedModal({
      modal: targetModal,
      data: {},
    });
  };
  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>
        <div className="modal-error">
          <div className="error-icon">!</div>
          <h3>{heading}</h3>
          <p>{sub}</p>
          <button className="btn btn-danger" onClick={handleTransfer}>
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}
