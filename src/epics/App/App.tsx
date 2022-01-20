import React from 'react';
import { useTheme } from '@emotion/react';
import { TSize } from '../../definitions/TElementProps';
import { CWrap } from './App.styles';

export interface IProps {
  sizeId?: TSize;
  langId?: string;
  customise?: unknown;
}

export const App: React.FC<IProps> = (props): JSX.Element => {
  const { sizeId = 'desktop', langId = 'ru', } = props;
  //@ts-ignore
  const theme = { ...useTheme().App }
  return (
    <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
      <h1>Hello world!</h1>
    </CWrap>
  );
};

export default App;
