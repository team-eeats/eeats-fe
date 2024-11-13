import { create } from "zustand";

type ModalStore = {
  modals: Record<string, boolean>;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  isOpen: (id: string) => boolean;
};

const useModalStore = create<ModalStore>((set, get) => ({
  modals: {},
  openModal: (id: string) =>
    set((state) => ({ modals: { ...state.modals, [id]: true } })),
  closeModal: (id: string) =>
    set((state) => ({ modals: { ...state.modals, [id]: false } })),
  isOpen: (id: string) => !!get().modals[id],
}));

export default useModalStore;
