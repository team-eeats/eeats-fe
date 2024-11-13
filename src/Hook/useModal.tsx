import useModalStore from "../store/useModalStore";

export const useModal = (id: string) => {
  const isOpen = useModalStore((state: any) => state.isOpen(id));
  const openModal = () => useModalStore.getState().openModal(id);
  const closeModal = () => useModalStore.getState().closeModal(id);

  const onToggle = () => {
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    onToggle,
  };
};
