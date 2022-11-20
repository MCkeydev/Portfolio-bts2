import create from 'zustand';
import createThemeSlice, { ThemeSlice } from './slice/ThemeSlice';

const useAppStore = create<ThemeSlice>()((...a) => ({
    ...createThemeSlice(...a),
}));

export default useAppStore;
