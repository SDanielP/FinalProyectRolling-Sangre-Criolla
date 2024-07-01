import { create } from 'zustand'

export const useSizeFilter = create((set)=>({
    selectedSize: "Todos los tamaños",
    setSelectedSize: (newSelectedSize) => set(() => ({ selectedSize: newSelectedSize })),
}));