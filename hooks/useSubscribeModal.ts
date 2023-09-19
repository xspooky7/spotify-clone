import { create } from "zustand"

interface SubscribeModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useSubscribeModal = create<SubscribeModalStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useSubscribeModal
