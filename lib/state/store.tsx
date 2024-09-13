import { create } from "zustand";

interface ModalStore {
  isModalOpen: boolean;
  isBookModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openBookModal: () => void;
  closeBookModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  isBookModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  openBookModal: () => set({ isBookModalOpen: true }),
  closeBookModal: () => set({ isBookModalOpen: false }),
}));
