import { create } from "zustand";

export const usePriceFilter = create((set) => ({
  min: 10000,
  max: 30000,
  setMinPrice: (newMin) => set((state) => ({ ...state, min: newMin })),
  setMaxPrice: (newMax) => set((state) => ({ ...state, max: newMax })),
}));

// }));
