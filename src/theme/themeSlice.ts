import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from '../store/store';

interface ThemeState {
  prefersDarkTheme: Boolean,
};
const initialState: ThemeState = {
  prefersDarkTheme: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.prefersDarkTheme = !state.prefersDarkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectPrefersDarkTheme = (state: AppState) => state.theme.prefersDarkTheme;
export default themeSlice.reducer;
