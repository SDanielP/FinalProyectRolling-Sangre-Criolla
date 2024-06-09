import { create } from 'zustand'

export const useSizeFilter = create((set)=>({
    selectedSize: "",
    setSelectedSize: (newSelectedSize) => set(() => ({ selectedSize: newSelectedSize })),
}));