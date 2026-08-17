import SVG from "../components/sentence-popu-svg";
import { useLanguage } from "../global/languageProvider";
import ContactSVG from "../Svgs/contact.svg";

export default function Contact() {
  const { t } = useLanguage();
  const contactText = t.contact;
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

          <form className="contact-form">
            <input
              type="text"
              id="contact-name"
              placeholder={contactText.name}
              required
            />

            <input
              type="email"
              id="contact-email"
              placeholder={contactText.email}
              required
            />

            <input
              type="text"
              id="contact-subject"
              placeholder={contactText.subject}
            />

            <textarea
              id="contact-message"
              placeholder={contactText.message}
              required
            ></textarea>

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
