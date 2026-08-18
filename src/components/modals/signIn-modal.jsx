import { useState } from "react";
import { useLanguage } from "../../global/languageProvider";
import signIn from "../../API/sign-in";

export default function SignInModal({ setShowedModal }) {
  const handleModal = (newModal) => {
    setShowedModal(newModal);
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const updateData = (e, dataType) => {
    if (dataType !== "password" && dataType !== "email") {
      return;
    }
    setData((prev) => {
      const newValue = e.target.value;
      return {
        ...prev,
        [dataType]: newValue,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn(data.email, data.password);
    console.log(response);
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

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="email"
              id="sign-in-email"
              placeholder={signInForm.email}
              value={data.email}
              onChange={(e) => {
                updateData(e, "email");
              }}
              required
            />

            <input
              type="password"
              id="sign-in-password"
              placeholder={signInForm.password}
              value={data.password}
              onChange={(e) => {
                updateData(e, "password");
              }}
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
