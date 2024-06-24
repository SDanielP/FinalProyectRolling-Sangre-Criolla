import {create} from 'zustand'

export const InicioOpen = create((set)=>({
    isOpenInicio:'true',
    setOpenInicio: (newValor) => set(() => ({ isOpenInicio: newValor })),
}));