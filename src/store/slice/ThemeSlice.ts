import { StateCreator } from "zustand";

export interface ThemeSlice {
    isDarkTheme: boolean,
    setTheme: () => void,
}

const createThemeSlice: StateCreator<ThemeSlice, [], [], ThemeSlice> = (set, get) => ({
    isDarkTheme: window.matchMedia('(prefers-color-scheme: dark)').matches,
    setTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme }))
});

export default createThemeSlice;
