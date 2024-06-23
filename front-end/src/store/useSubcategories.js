import { create } from 'zustand'

export const useSubcategories = create((set)=>({
    subcategories: [],
    setSubcategories: (newCategories) => set(() => ({ subcategories: newCategories }))
}));