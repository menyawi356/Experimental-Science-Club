import { useLanguage } from "../../global/languageProvider";

export default function SignInModal({ setShowedModal }) {
  const handleModal = (newModal) => {
    setShowedModal(newModal);
  };

  const { t } = useLanguage();
  const signInForm = t.signInForm;

  return (
    <div
      className="modal-overlay"
      id="signInModal"
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

        <div id="signInFormView">
          <h3 className="modal-heading" id="sign-in-heading">
            {signInForm.heading}
          </h3>

          <p className="modal-sub" id="sign-in-subheading">
            {signInForm.sub}
          </p>

          <form className="contact-form">
            <input
              type="email"
              id="sign-in-email"
              placeholder={signInForm.email}
              required
            />

            <input
              type="password"
              id="sign-in-password"
              placeholder={signInForm.password}
              required
            />

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
              id="sign-in-submit"
            >
              {signInForm.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}