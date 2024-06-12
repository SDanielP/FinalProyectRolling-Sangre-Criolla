import { create } from 'zustand'

export const useUbication = create((set)=>({
    ubication: "Todos",
    setUbication: (newUbication) => set(() => ({ubication: newUbication})),
}));