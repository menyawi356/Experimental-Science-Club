import useChangeModal from "./useChangeModal";
export default function useOpenJoinModal(isAuth) {
  const { setShowedModal } = useChangeModal();
  return () => {
    setShowedModal({ modal: "joi", data: {} });
  };
}
