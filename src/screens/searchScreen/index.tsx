import React, { useState } from 'react';

import { useAppDispatch } from '../../hooks/hooks';
import { addIsActive } from '../../store/actions';

import { SearchScreenView } from './searchScreenView';

export const SearchScreen = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const setInputValue = (text: string) => {
    // setValue(text);
    dispatch(addIsActive(true));
  };

  return <SearchScreenView value={value} setInputValue={setInputValue} />;
};
