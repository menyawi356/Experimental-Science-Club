import { useState } from "react";
import useLanguage from "../../hooks/useLanguage.js";
import updateData from "../../utils/uppdat-data.js";
import joinUs from "../../API/join-us.js";
export default function JoinModal({ setShowedModal }) {
  const handleModal = (newModal) => {
    setShowedModal(newModal);
  };
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    reasonOfjoining: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const recivedData = await joinUs(data);
    console.log(recivedData);
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
              onChange={(e) => {
                updateData(e, "name", setData);
              }}
            />

            <input
              type="email"
              placeholder={joinForm.email}
              value={data.email}
              required
              onChange={(e) => {
                updateData(e, "email", setData);
              }}
            />
            <input
              type="password"
              placeholder={joinForm.password}
              value={data.password}
              required
              onChange={(e) => {
                updateData(e, "password", setData);
              }}
            />

            <input
              type="text"
              placeholder={joinForm.age}
              value={data.age}
              required
              onChange={(e) => {
                updateData(e, "age", setData);
              }}
            />

            <textarea
              placeholder={joinForm.message}
              value={data.reasonOfjoining}
              onChange={(e) => {
                updateData(e, "reasonOfjoining", setData);
              }}
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
            >
              {joinForm.submit}
            </button>
          </form>
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
