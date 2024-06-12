import { create } from 'zustand'

export const useCategories = create((set)=>({
    categories: [],
    setCategories: (newCategories) => set(() => ({ categories: newCategories })),
}));