import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import TElementProps from '../../definitions/TElementProps';
import { CWrap } from './App.styles';
import Main from '../Main';
import Header from '../../features/Header';
import Footer from '../../features/Footer';
import Loader from '../Loader';
import Cursor from '../../features/Cursor';

export type IProps = TElementProps;

export const App: React.FC<IProps> = (props): JSX.Element => {
  const { sizeId = 'desktop', langId = 'ru', } = props;
  const [showLoader, setShowLoader] = useState(true);
  //@ts-ignore
  const theme = { ...useTheme().App };
  useEffect(() => {
    setTimeout(() => setShowLoader(false), 5000);
  }, []);
  return (
    <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
      {showLoader && <Loader sizeId={sizeId} />}
      <Header sizeId={sizeId} />
      <Main sizeId={sizeId} />
      <Footer sizeId={sizeId} />
      <Cursor sizeId={sizeId} />
    </CWrap>
  );
};

export default App;