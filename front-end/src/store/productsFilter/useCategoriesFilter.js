import { create } from 'zustand'

export const useCategoriesFilter = create((set)=>({
    selectedCategory: "Hombres",
    setSelectedCategory: (newSelectedCategory) => set(() => ({ selectedCategory: newSelectedCategory })),
}));