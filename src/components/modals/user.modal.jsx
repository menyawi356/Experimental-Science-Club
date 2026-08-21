import useLanguage from "../../hooks/useLanguage.js";
import useAuth from "../../hooks/useAuth.js";
import signOut from "../../API/sign-out.js";

export default function UserModal({ setShowedModal }) {
  const { auth, setAuth } = useAuth();
  const { t } = useLanguage();

  const user = auth.user;
  const userModal = t.userModal;

  const handleModal = (newModal) => {
    setShowedModal({ modal: newModal, data: {} });
  };

  const handleSignOut = async () => {
    const response = await signOut();
    if (response.ok) {
      setAuth({
        isAuth: false,
        user: null,
      });
      setShowedModal({ modal: "none", data: {} });
    } else {
      const errorCode = response.error;
      setShowedModal({
        modal: "error",
        data: {
          errorCode,
          to: "none",
        },
      });
    }
  };

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
          <h3 className="modal-heading">{userModal.heading}</h3>

          <p className="modal-sub">{userModal.sub}</p>

          <div className="user-info">
            <div className="user-info__item">
              <span>{userModal.name}</span>
              <p>{user?.name}</p>
            </div>

            <div className="user-info__item">
              <span>{userModal.email}</span>
              <p>{user?.email}</p>
            </div>

            <div className="user-info__item">
              <span>{userModal.age}</span>
              <p>{user?.age}</p>
            </div>
            <div className="user-info__item">
              <span>{userModal.publishedPapers}</span>
              <p>{user?.publisedPapers.count}</p>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary user-modal__signout"
            onClick={handleSignOut}
          >
            {userModal.signOut}
          </button>
        </div>
      </div>
    </div>
  );
}
