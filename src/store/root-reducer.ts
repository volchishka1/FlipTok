import { combineReducers } from '@reduxjs/toolkit';

export enum NameSpace {
  homeScreen = 'HOME_SCREEN',
}
export const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;
