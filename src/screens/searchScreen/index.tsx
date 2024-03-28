import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addIsActive } from '../../store/actions';
import { getLoadData } from '../../store/homeScreen/selectors';

import { SearchScreenView } from './searchScreenView';

export const SearchScreen = () => {
  const [link, setLink] = useState('');
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const getLoadedData = useAppSelector(getLoadData);

  const setInputValue = () => {
    setText(link);
    dispatch(addIsActive(true));
  };

  return (
    <SearchScreenView text={text} link={link} setLink={setLink} setInputValue={setInputValue} />
  );
};
