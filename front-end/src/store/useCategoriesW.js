import { create } from 'zustand'

export const useCategoriesW = create((set)=>({
    categoriesW: [],
    setCategoriesW: (newCategories) => set(() => ({ categoriesW: newCategories })),
}));