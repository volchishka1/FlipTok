import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import { addIsActive, saveData } from '../actions';

const initialState: HomeScreen = {
  isActive: false,
  itemData: {
    music: {
      id: '',
      title: '',
      url: '',
    },
    video: {
      id: '',
      title: '',
      cover: '',
      url: '',
    },
  },
};

export const homeScreen = createReducer(initialState, (builder) => {
  builder
    .addCase(addIsActive, (state, action) => {
      state.isActive = action.payload;
    })
    .addCase(saveData, (state, action) => {
      state.itemData = action.payload;
    });
});
