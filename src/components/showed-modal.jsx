import JoinModal from "./modals/join-club.modal";

export default function ShowedModal({ showedModal, setShowedModal }) {
  return showedModal === "join" ? (
    <JoinModal setShowedModal={setShowedModal} />
  ) : (
    ""
  );
}
