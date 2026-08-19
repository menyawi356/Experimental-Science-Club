import { useRef, useState } from "react";
import useLanguage from "../../hooks/useLanguage.js";
import { useSearchParams } from "react-router-dom";
import publish from "../../API/publish.js";

export default function PublishModal({ setShowedModal }) {
  const [pdfType, setPdfType] = useSearchParams();
  const type = pdfType.get("type");

  const { t } = useLanguage();

  const cat =
    type === "pdf"
      ? "PDF"
      : type === "article"
        ? "Article"
        : type === "paper"
          ? "Research Paper"
          : null;

  const [data, setData] = useState({
    title: "",
    authors: [],
    abstract: "",
    tags: [],
    pdf: null,
    type: type,
    cat: cat,
  });

  const [authorInput, setAuthorInput] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [disabled, setDisabled] = useState(false);
  const authorInputRef = useRef(null);
  const tagInputRef = useRef(null);
  const publishForm = t.publishForm;
  const handleClose = () => {
    setPdfType({});
    setShowedModal({modal:"none",data:{}});
  };

  const handleAddAuthor = () => {
    const author = authorInput.trim();

    if (!author) return;

    setData((prev) => ({
      ...prev,
      authors: [...prev.authors, author],
    }));

    setAuthorInput("");

    if (authorInputRef.current) {
      authorInputRef.current.setCustomValidity("");
    }
  };

  const handleRemoveAuthor = (index) => {
    setData((prev) => ({
      ...prev,
      authors: prev.authors.filter((_, i) => i !== index),
    }));
  };

  const handleAddTag = () => {
    const tag = tagInput.trim();

    if (!tag) return;

    setData((prev) => ({
      ...prev,
      tags: [...prev.tags, tag],
    }));

    setTagInput("");

    if (tagInputRef.current) {
      tagInputRef.current.setCustomValidity("");
    }
  };

  const handleRemoveTag = (index) => {
    setData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.authors.length === 0) {
      authorInputRef.current.setCustomValidity(
        "Please add at least one author",
      );
    } else {
      authorInputRef.current.setCustomValidity("");
    }
    if (data.tags.length === 0) {
      tagInputRef.current.setCustomValidity("Please add at least one tag");
    } else {
      tagInputRef.current.setCustomValidity("");
    }
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    setDisabled(true);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("authors", JSON.stringify(data.authors));
    formData.append("abstract", data.abstract);
    formData.append("tags", JSON.stringify(data.tags));
    formData.append("type", type);
    formData.append("cat", cat);
    formData.append("pdf", data.pdf);
    const response = await publish(formData);
    console.log(response);
    if (response.ok) {
      setShowedModal({modal:"success",data:{}});
    } else {
      setDisabled(false);
    }
  };
  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={handleClose}>
          ✕
        </button>
        <div>
          <h3 className="modal-heading">{publishForm.heading}</h3>
          <p className="modal-sub">{publishForm.sub}</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={publishForm.title}
              value={data.title}
              disabled={disabled}
              required
              minLength={5}
              onChange={(e) =>
                setData({
                  ...data,
                  title: e.target.value,
                })
              }
            />
            <div className="publish-list-input">
              <div className="publish-input-row">
                <input
                  ref={authorInputRef}
                  type="text"
                  placeholder={publishForm.author}
                  value={authorInput}
                  disabled={disabled}
                  onChange={(e) => {
                    setAuthorInput(e.target.value);
                    e.target.setCustomValidity("");
                  }}
                />
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={handleAddAuthor}
                  disabled={disabled}
                >
                  {publishForm.add}
                </button>
              </div>
              {data.authors.length > 0 && (
                <div className="publish-items">
                  {data.authors.map((author, index) => (
                    <div className="publish-item" key={`${author}-${index}`}>
                      <span>{author}</span>

                      <button
                        type="button"
                        onClick={() => handleRemoveAuthor(index)}
                        disabled={disabled}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <textarea
              placeholder={publishForm.abstract}
              rows="4"
              value={data.abstract}
              disabled={disabled}
              required
              minLength={50}
              onChange={(e) =>
                setData({
                  ...data,
                  abstract: e.target.value,
                })
              }
            />
            <div className="publish-list-input">
              <div className="publish-input-row">
                <input
                  ref={tagInputRef}
                  type="text"
                  placeholder={publishForm.tag}
                  value={tagInput}
                  disabled={disabled}
                  onChange={(e) => {
                    setTagInput(e.target.value);
                    e.target.setCustomValidity("");
                  }}
                />
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={handleAddTag}
                  disabled={disabled}
                >
                  {publishForm.add}
                </button>
              </div>
              {data.tags.length > 0 && (
                <div className="publish-items">
                  {data.tags.map((tag, index) => (
                    <div className="publish-item" key={`${tag}-${index}`}>
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(index)}
                        disabled={disabled}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              type="file"
              accept=".pdf"
              disabled={disabled}
              required
              onChange={(e) =>
                setData({
                  ...data,
                  pdf: e.target.files[0],
                })
              }
            />
            <span
              style={{
                fontSize: "12px",
                color: "var(--ink-faint)",
              }}
            >
              {publishForm.fileHint}
            </span>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
                disabled={disabled}
              >
                {publishForm.submit}
              </button>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={handleClose}
                disabled={disabled}
              >
                {publishForm.cancel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
