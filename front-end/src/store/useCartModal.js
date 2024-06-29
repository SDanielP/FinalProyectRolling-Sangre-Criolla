import {create} from 'zustand'

export const useCartModal = create((set)=>({
    isOpenCartModal:'false',
    setOpenCartModal: (newValor) => set(() => ({ isOpenCartModal: newValor })),
}));