import * as React from 'react';

import Svg, { Path } from 'react-native-svg';
export const SearchSvg = (props) => (
  <Svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 -7 24 38'} {...props}>
    <Path
      fill={'#6563ff'}
      d={
        'M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7Z'
      }
    />
  </Svg>
);
