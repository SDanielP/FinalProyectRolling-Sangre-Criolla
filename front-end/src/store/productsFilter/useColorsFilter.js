import { create } from 'zustand'

export const useColorsFilter = create((set)=>({
    selectedColor: "Todos los colores",
    setSelectedColor: (newSelectedColor) => set(() => ({ selectedColor: newSelectedColor })),
}));