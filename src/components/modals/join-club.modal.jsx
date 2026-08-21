import { useState } from "react";
import useLanguage from "../../hooks/useLanguage.js";
import updateData from "../../utils/uppdat-data.js";
import joinUs from "../../API/join-us.js";
import useAuth from "../../hooks/useAuth.js";
export default function JoinModal({ setShowedModal }) {
  const handleModal = (newModal) => {
    setShowedModal({ modal: newModal, data: {} });
  };
  const { setAuth } = useAuth();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    reasonOfjoining: "",
  });
  const [disabled, setDisabled] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisabled(true);
    const response = await joinUs(data);

    if (response.ok) {
      setAuth({
        isAuth: true,
        user: response.data,
      });
      setShowedModal("none");
    } else {
      const errorCode = response.error;
      setShowedModal({
        modal: "error",
        data: {
          errorCode,
          to: "join",
        },
      });
    }
  };
  const { t } = useLanguage();
  const joinForm = t.joinForm;
  return (
    <div
      className="modal-overlay"
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

        <div>
          <h3 className="modal-heading">{joinForm.heading}</h3>

          <p className="modal-sub">{joinForm.sub}</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={joinForm.name}
              required
              value={data.name}
              disabled={disabled}
              onChange={(e) => {
                updateData(e, "name", setData);
              }}
            />

            <input
              type="email"
              placeholder={joinForm.email}
              value={data.email}
              disabled={disabled}
              required
              onChange={(e) => {
                updateData(e, "email", setData);
              }}
            />
            <input
              type="password"
              placeholder={joinForm.password}
              value={data.password}
              disabled={disabled}
              required
              onChange={(e) => {
                updateData(e, "password", setData);
              }}
            />

            <input
              type="text"
              placeholder={joinForm.age}
              value={data.age}
              disabled={disabled}
              required
              onChange={(e) => {
                updateData(e, "age", setData);
              }}
            />

            <textarea
              placeholder={joinForm.message}
              value={data.reasonOfjoining}
              disabled={disabled}
              onChange={(e) => {
                updateData(e, "reasonOfjoining", setData);
              }}
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={disabled}
              style={{ justifyContent: "center" }}
            >
              {joinForm.submit}
            </button>
          </form>
          <div className="already-account">
            <span className="already-account__text">
              {joinForm.alreadyAccount.text}
            </span>

            <button
              type="button"
              className="already-account__button"
              onClick={() => {
                handleModal("sign");
              }}
            >
              {joinForm.alreadyAccount.button}
            </button>
          </div>
        </div>

        {/* <div
          className="modal-success"
          style={{ display: "none" }}
        >
          <div className="success-icon">✓</div>

          <h3 >Welcome Aboard!</h3>

          <p >
            Your application has been received. Our team will be in touch soon.
          </p>

          <a className="btn btn-primary">
            Close
          </a>
        </div> */}
      </div>
    </div>
  );
}
