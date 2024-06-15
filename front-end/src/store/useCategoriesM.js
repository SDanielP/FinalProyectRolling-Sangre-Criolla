import { create } from 'zustand'

export const useCategoriesM = create((set)=>({
    categoriesM: [],
    setCategoriesM: (newCategories) => set(() => ({ categoriesM: newCategories })),
}));