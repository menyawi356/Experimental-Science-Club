import useAuth from "../hooks/useAuth.js";
import useChangeModal from "../hooks/useChangeModal.js";

export default function UserButton() {
  const { auth } = useAuth();
  const { setShowedModal } = useChangeModal();

  const handleClick = () => {
    setShowedModal({ modal: "user", data: {} });
  };

  return (
    <button
      type="button"
      className="user-button"
      onClick={handleClick}
      aria-label="Open profile"
    >
      <span className="user-button__name">{auth.user?.name}</span>

      <svg
        className="user-button__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
      </svg>
    </button>
  );
}
