import { create } from 'zustand'

export const useColorsFilter = create((set)=>({
    selectedColor: "Selecciona una categoría",
    setSelectedColor: (newSelectedColor) => set(() => ({ selectedColor: newSelectedColor })),
}));