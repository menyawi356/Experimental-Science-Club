import useChangeModal from "./useChangeModal";

export default function useOpenJoinModal() {
  const { setShowedModal } = useChangeModal();
  return () => {
    setShowedModal({ modal: "join", data: {} });
  };
}
