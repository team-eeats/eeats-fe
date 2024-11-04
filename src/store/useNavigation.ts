import { create } from "zustand"

type SelectState = "Home" | "Vote" | "Suggest";

interface NavigationType {
  select: SelectState
  click: (value: SelectState) => void
}

const useNavigation = create<NavigationType>((set) => ({
  select: "Home",
  click: (value: SelectState) => set({ select: value })
}))

export default useNavigation