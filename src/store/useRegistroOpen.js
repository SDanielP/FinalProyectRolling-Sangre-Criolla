import {create} from 'zustand'

export const RegistroOpen = create((set)=>({
    isOpenRegistro:'true',
    setOpenRegistro: (newValor) => set(() => ({ isOpenRegistro: newValor })),
}));