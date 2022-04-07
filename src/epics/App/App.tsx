import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import TElementProps from '../../definitions/TElementProps';
import { CWrap } from './App.styles';
import Main from '../Main';
import Header from '../../features/Header';
import Footer from '../../features/Footer';
import Loader from '../Loader';
import Cursor from '../../features/Cursor';
import MouseContext from '../../context/MouseContext';

export type IProps = TElementProps;

export const App: React.FC<IProps> = (props): JSX.Element => {
  const { sizeId = 'desktop', langId = 'ru', } = props;
  const [showLoader, setShowLoader] = useState(true);
  const [moveMouse, setMoveMouse] = useState({ x: 0, y: 0 });
  const handleMoveMouse = (e: React.MouseEvent) => setMoveMouse({ x: e.clientX, y: e.clientY });
  //@ts-ignore
  const theme = { ...useTheme().App };
  useEffect(() => {
    setTimeout(() => setShowLoader(false), 5000);
  });
  return (
    <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap} onMouseMove={showLoader ? undefined : handleMoveMouse}>
      <MouseContext.Provider value={moveMouse}>
        {showLoader && <Loader sizeId={sizeId} />}
        <Header sizeId={sizeId} />
        <Main sizeId={sizeId} />
        <Footer sizeId={sizeId} />
        <Cursor sizeId={sizeId} />
      </MouseContext.Provider>
    </CWrap>
  );
};

export default App;