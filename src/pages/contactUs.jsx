import ContactSVG from "../Svgs/contact.svg";

export default function Contact() {
  return (
    <main id="page-contact" className="page-view active">
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2 id="contact-title">Contact Us</h2>

            <p className="lede" id="contact-lede">
              Have questions about membership, partnerships, or publishing?
              Reach out to us.
            </p>
          </div>

          <form className="contact-form">
            <input
              type="text"
              id="contact-name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              id="contact-email"
              placeholder="Your Email"
              required
            />

            <input type="text" id="contact-subject" placeholder="Subject" />

            <textarea
              id="contact-message"
              placeholder="Your Message..."
              required
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
              id="contact-send"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-symbol-stage" data-symbol="contact">
        <div className="symbol-3d-container">{<ContactSVG />}</div>

        <div className="sentence-popup"></div>
      </div>
    </main>
  );
}
