import { create } from 'zustand'

export const useCategoriesFilter = create((set)=>({
    selectedCategory: "",
    setSelectedCategory: (newSelectedCategory) => set(() => ({ selectedCategory: newSelectedCategory })),
    selectedSubcategory: "",
    setSelectedSubcategory: (newSelectedCategory) => set(() => ({ selectedSubcategory: newSelectedCategory })),
}));