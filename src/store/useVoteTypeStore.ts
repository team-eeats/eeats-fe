import create from "zustand";

interface SelectState {
  selectType: boolean;
  setSelectType: (value: boolean) => void;
}

const useVoteTypeStore = create<SelectState>((set) => ({
  selectType: false,
  setSelectType: (value: boolean) => set({ selectType: value }),
}));

export default useVoteTypeStore;
