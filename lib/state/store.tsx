import { create } from "zustand";

interface ModalStore {
  isPhoneModalOpen: boolean;
  isBookModalOpen: boolean;
  openPhoneModal: () => void;
  closePhoneModal: () => void;
  openBookModal: () => void;
  closeBookModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isPhoneModalOpen: false,
  isBookModalOpen: false,
  openPhoneModal: () => set({ isPhoneModalOpen: true }),
  closePhoneModal: () => set({ isPhoneModalOpen: false }),
  openBookModal: () => set({ isBookModalOpen: true }),
  closeBookModal: () => set({ isBookModalOpen: false }),
}));
