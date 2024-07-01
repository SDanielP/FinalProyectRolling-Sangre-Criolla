import { create } from 'zustand'

export const useSortFilter = create((set)=>({
    ordenarProp: "lowestPrice",
    ordenarSeleccion: "Orden por defecto",
    setSortProp: (newSort) => set(() => ({ ordenarProp: newSort })),
    setSortSelected: (newSortSelected) => set(() => ({ ordenarSeleccion: newSortSelected })),
}));