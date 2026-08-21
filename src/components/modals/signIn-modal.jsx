import { useState } from "react";
import useLanguage from "../../hooks/useLanguage.js";
import signIn from "../../API/sign-in";
import useAuth from "../../hooks/useAuth.js";
import updateData from "../../utils/uppdat-data.js";
export default function SignInModal({ setShowedModal }) {
  const [disabled, setDisabled] = useState(false);
  const handleModal = (newModal) => {
    setShowedModal({ modal: newModal, data: {} });
  };
  const { setAuth } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn(data.email, data.password);
    if (response.ok) {
      setAuth({
        isAuth: true,
        user: response.data,
      });
      setShowedModal({ modal: "none", data: {} });
    } else {
      const errorCode = response.error;
      setShowedModal({
        modal: "error",
        data: {
          errorCode,
          to: "sign",
        },
      });
    }

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

          <form
            className="contact-form"
            onSubmit={(e) => {
              setDisabled(true);
              handleSubmit(e);
            }}
          >
            <input
              type="email"
              id="sign-in-email"
              placeholder={signInForm.email}
              value={data.email}
              onChange={(e) => {
                updateData(e, "email", setData);
              }}
              disabled={disabled}
              required
            />

            <input
              type="password"
              id="sign-in-password"
              placeholder={signInForm.password}
              value={data.password}
              onChange={(e) => {
                updateData(e, "password", setData);
              }}
              required
              disabled={disabled}
            />

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
              id="sign-in-submit"
              disabled={disabled}
            >
              {signInForm.submit}
            </button>
          </form>
          <div className="already-account">
            <span className="already-account__text">
              {signInForm.dontHaveAccount.text}
            </span>

            <button
              type="button"
              className="already-account__button"
              onClick={() => handleModal("join")}
            >
              {signInForm.dontHaveAccount.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
