import React, { useState } from 'react';

import { SearchScreenView } from './searchScreenView';

export const SearchScreen = () => {
  const [value, setValue] = useState('');

  const setInputValue = (text: string) => {
    setValue(text);
  };

  const insertDataLink = () => {};

  return (
    <SearchScreenView value={value} setInputValue={setInputValue} insertDataLink={insertDataLink} />
  );
};
