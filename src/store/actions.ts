import { createAction } from '@reduxjs/toolkit';

import { ActionType } from '../types/action';

export const addIsActive = createAction(ActionType.ChangeActive, (isActive: boolean) => ({
  payload: isActive,
}));
