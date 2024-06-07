import { create } from 'zustand'

export const useCategoriesFilter = create((set)=>({
    selectedCategory: "Selecciona una categoría",
    setSelectedCategory: (newSelectedCategory) => set(() => ({ selectedCategory: newSelectedCategory })),
}));