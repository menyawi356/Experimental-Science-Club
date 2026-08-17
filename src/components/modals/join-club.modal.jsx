export default function JoinModal({ setShowedModal }) {
  const handleModal = (newModal) => {
    setShowedModal(newModal);
  };
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
            Join ScienoAtlas
          </h3>

          <p className="modal-sub" id="join-subheading">
            Become part of a nonprofit community exploring science beyond the
            classroom.
          </p>

          <form className="contact-form">
            <input
              type="text"
              id="join-name"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              id="join-email"
              placeholder="Email Address"
              required
            />

            <input type="text" id="join-age" placeholder="Age / Grade" />

            <input
              type="text"
              id="join-field"
              placeholder="e.g. Physics, Chemistry, Biology, Math & CS"
            />

            <textarea
              id="join-message"
              placeholder="Why do you want to join? (optional)"
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
              id="join-submit"
            >
              Submit Application
            </button>
          </form>
        </div>

        <div
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
        </div>
      </div>
    </div>
  );
}
