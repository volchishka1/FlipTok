import { ThunkActionResult } from '../types/action';

import { saveData } from './actions';

export const loadData =
  (urlData: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const url = urlData;
    const resp = await api.get(url);
    dispatch(saveData(resp.data));
  };
