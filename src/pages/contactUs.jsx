import contactUs from "../API/contactUs.js";
import SVG from "../components/sentence-popu-svg";
import useLanguage from "../hooks/useLanguage.js";
import ContactSVG from "../Svgs/contact.svg";
import { useState } from "react";
import useChangeModal from "../hooks/useChangeModal.js";
import useLoader from "../hooks/useLoader.js";
export default function Contact() {
  const { t } = useLanguage();
  const contactText = t.contact;
  const { setShowedModal } = useChangeModal();
  const { startLoader, stopLoader } = useLoader();
  const [data, setData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const handleSend = async (e) => {
    e.preventDefault();
    startLoader();
    try {
      const response = await contactUs(data);
      if (!response.ok) {
        setShowedModal({
          modal: "error",
          data: {
            errorCode: response.error,
            to: "none",
          },
        });
        return;
      }
      setData({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
      setShowedModal({
        modal: "success",
        data: {
          heading: contactText.success.heading,
          message: contactText.success.message,
          close: contactText.success.close,
        },
      });
    } catch {
      setShowedModal({
        modal: "error",
        data: {
          errorCode: "NETWORK_ERROR",
          to: "none",
        },
      });
    } finally {
      stopLoader();
    }
  };
  const handleChange = (e, field) => {
    setData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };
  return (
    <main id="page-contact" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="contact-title">{contactText.title}</h2>

            <p className="lede" id="contact-lede">
              {contactText.lede}
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSend}>
            <input
              type="text"
              id="contact-name"
              placeholder={contactText.name}
              value={data.name}
              onChange={(e) => handleChange(e, "name")}
              required
            />

            <input
              type="email"
              id="contact-email"
              placeholder={contactText.email}
              value={data.email}
              onChange={(e) => handleChange(e, "email")}
              required
            />

            <input
              type="text"
              id="contact-subject"
              placeholder={contactText.subject}
              value={data.subject}
              onChange={(e) => handleChange(e, "subject")}
            />

            <textarea
              id="contact-message"
              placeholder={contactText.message}
              value={data.message}
              onChange={(e) => handleChange(e, "message")}
              required
            />

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
              id="contact-send"
            >
              {contactText.send}
            </button>
          </form>
        </div>
      </div>

      <SVG page="contact">
        <ContactSVG />
      </SVG>
    </main>
  );
}
