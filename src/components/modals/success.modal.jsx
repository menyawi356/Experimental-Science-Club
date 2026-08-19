export default function SuccessModal({
  heading,
  message,
  buttonText,
  setShowedModal,
}) {
  const handleClose = () => {
    setShowedModal({ modal: "none", data: {} });
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

        <div className="modal-success">
          <div className="success-icon">✓</div>
          <h3>{heading}</h3>
          <p>{message}</p>
          <button className="btn btn-primary" onClick={handleClose}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
