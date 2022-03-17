import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import TElementProps from '../../definitions/TElementProps';
import { CWrap } from './App.styles';
import Main from '../Main';
import Header from '../../features/Header';
import Footer from '../../features/Footer';
import Loader from '../../features/Loader';
import Cursor from '../../features/Cursor';

export type IProps = TElementProps;

export const App: React.FC<IProps> = (props): JSX.Element => {
  const { sizeId = 'desktop', langId = 'ru', } = props;
  const [showLoader, setShowLoader] = useState(true)
  const [moveMouse, setMoveMouse] = useState({ x: 0, y: 0 })

  //@ts-ignore
  const theme = { ...useTheme().App };

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 5000);
  });

  return (
    <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap} style={{
      // position: showLoader ? 'fixed' : 'relative',
      position: 'fixed',
    }}
      onMouseMove={showLoader ? undefined : (e) => setMoveMouse({ x: e.clientX, y: e.clientY })}
    >
      {/* {showLoader && <Loader sizeId={sizeId} langId={langId} />} */}
      <Loader sizeId={sizeId} langId={langId} />
      <Cursor sizeId={sizeId} langId={langId} mouseCoords={moveMouse} showLoader={showLoader} />
      <Header sizeId={sizeId} langId={langId} />
      <Main sizeId={sizeId} langId={langId} />
      <Footer sizeId={sizeId} />
    </CWrap>
  );
};

export default App;