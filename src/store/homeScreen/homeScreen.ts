import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';
import { addIsActive } from '../actions';

const initialState: HomeScreen = {
  isActive: false,
};

export const homeScreen = createReducer(initialState, (builder) => {
  builder.addCase(addIsActive, (state, action) => {
    state.isActive = action.payload;
  });
});
