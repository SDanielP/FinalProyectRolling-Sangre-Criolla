import { create } from 'zustand'

export const useColoursFilter = create((set)=>({
    selectedColour: "Selecciona una categoría",
    setSelectedColour: (newSelectedColour) => set(() => ({ selectedColour: newSelectedColour })),
}));