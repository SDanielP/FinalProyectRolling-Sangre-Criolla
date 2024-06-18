import { create } from 'zustand'

export const useCategories = create((set)=>({
    categoriesM: [],
    setCategoriesM: (newCategories) => set(() => ({ categoriesM: newCategories })),
    categoriesW: [],
    setCategoriesW: (newCategories) => set(() => ({ categoriesW: newCategories })),
}));