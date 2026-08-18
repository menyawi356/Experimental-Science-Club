import useChangeModal from "../hooks/useChangeModal";
import JoinModal from "./modals/join-club.modal";
import SignInModal from "./modals/signIn-modal";
import UserModal from "./modals/user.modal";

export default function ShowedModal() {
  const { showedModal, setShowedModal } = useChangeModal();
  return showedModal === "join" ? (
    <JoinModal setShowedModal={setShowedModal} />
  ) : showedModal === "sign" ? (
    <SignInModal setShowedModal={setShowedModal} />
  ) : showedModal === "user" ? (
    <UserModal setShowedModal={setShowedModal} />
  ) : (
    ""
  );
}
