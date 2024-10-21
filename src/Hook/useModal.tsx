import useModalStore from "../store/useModalStore";

export const useModal = (type: string) => {
  const { modalType, isOpen, openModal, closeModal } = useModalStore();

  const onToggle = () => {
    if (modalType === type && isOpen) {
      closeModal();
    } else {
      openModal(type);
    }
  };

  return {
    isOpen: modalType === type && isOpen,
    onToggle,
  };
};
