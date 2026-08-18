import useLanguage from "../../hooks/useLanguage.js";
export default function JoinModal({ setShowedModal }) {
  const handleModal = (newModal) => {
    setShowedModal(newModal);
  };
  const { t } = useLanguage();
  const joinForm = t.joinForm;
  return (
    <div
      className="modal-overlay"
      id="joinModal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleModal("none");
        }
      }}
    >
      <div className="modal-box">
        <button
          className="modal-close"
          onClick={() => {
            handleModal("none");
          }}
        >
          ✕
        </button>

        <div id="joinFormView">
          <h3 className="modal-heading" id="join-heading">
            {joinForm.heading}
          </h3>

          <p className="modal-sub" id="join-subheading">
            {joinForm.sub}
          </p>

          <form className="contact-form">
            <input
              type="text"
              id="join-name"
              placeholder={joinForm.name}
              required
            />

            <input
              type="email"
              id="join-email"
              placeholder={joinForm.email}
              required
            />

            <input type="text" id="join-age" placeholder={joinForm.age} />

            <input type="text" id="join-field" placeholder={joinForm.fieldPh} />

            <textarea
              id="join-message"
              placeholder={joinForm.message}
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
              id="join-submit"
            >
              {joinForm.message}
            </button>
          </form>
        </div>

        {/* <div
          id="joinSuccessView"
          className="modal-success"
          style={{ display: "none" }}
        >
          <div className="success-icon">✓</div>

          <h3 id="join-success-title">Welcome Aboard!</h3>

          <p id="join-success-body">
            Your application has been received. Our team will be in touch soon.
          </p>

          <a className="btn btn-primary" id="join-close">
            Close
          </a>
        </div> */}
      </div>
    </div>
  );
}
