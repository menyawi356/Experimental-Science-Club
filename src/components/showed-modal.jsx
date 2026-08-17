import JoinModal from "./modals/join-club.modal";
import SignInModal from "./modals/signIn-modal";

export default function ShowedModal({ showedModal, setShowedModal }) {
  return showedModal === "join" ? (
    <JoinModal setShowedModal={setShowedModal} />
  ) : showedModal === "sign" ? (
    <SignInModal setShowedModal={setShowedModal} />
  ) : null;
}
