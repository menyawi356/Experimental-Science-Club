import useChangeModal from "../hooks/useChangeModal";
import JoinModal from "./modals/join-club.modal";
import PublishModal from "./modals/publish.modal";
import SignInModal from "./modals/signIn-modal";
import SuccessModal from "./modals/success.modal";
import UserModal from "./modals/user.modal";

export default function ShowedModal() {
  const { showedModal, setShowedModal } = useChangeModal();
  switch (showedModal.modal) {
    case "join":
      return <JoinModal setShowedModal={setShowedModal} />;
    case "sign":
      return <SignInModal setShowedModal={setShowedModal} />;
    case "user":
      return <UserModal setShowedModal={setShowedModal} />;
    case "publish":
      return <PublishModal setShowedModal={setShowedModal} />;
    case "success":
      return (
        <SuccessModal setShowedModal={setShowedModal} data={showedModal.data} />
      );
    default:
      return null;
  }
}
