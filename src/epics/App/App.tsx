import React from 'react';
import { useTheme } from '@emotion/react';
import { TSize } from '../../definitions/TElementProps';
import { CWrap } from './App.styles';
import Main from '../Main';
import Header from '../../features/Header';

export interface IProps {
  sizeId?: TSize;
  langId?: string;
  customise?: unknown;
}

export const App: React.FC<IProps> = (props): JSX.Element => {
  const { sizeId = 'desktop', langId = 'ru', } = props;
  //@ts-ignore
  const theme = { ...useTheme().App };
  return (
    <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
      <Header sizeId={sizeId} langId={langId} />
      <Main sizeId={sizeId} langId={langId} />
    </CWrap>
  );
};

export default App;
