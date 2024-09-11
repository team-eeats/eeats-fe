import { create } from 'zustand';

interface InputState {
  value: string;
  setValue: (newValue: string) => void;
}

const useInputStore = create<InputState>((set) => ({
  value: '',
  setValue: (newValue: string) => set({ value: newValue }),
}));

export default useInputStore;
