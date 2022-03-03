import React, { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import { TSize } from '../../definitions/TElementProps';
import { CWrap } from './App.styles';
import Main from '../Main';
import Header from '../../features/Header';
import Footer from '../../features/Footer';
import Loader from '../../features/Loader';
import Cursor from '../../features/Cursor';

export interface IProps {
  sizeId?: TSize;
  langId?: string;
  customise?: unknown;
}

export const App: React.FC<IProps> = (props): JSX.Element => {
  const { sizeId = 'desktop', langId = 'ru', } = props;
  const [loaderVisibility, setLoaderVisibility] = useState(true)
  const [mouseCoords, setMouseCoords] = useState({x: 0, y: 0})



  //@ts-ignore
  const theme = { ...useTheme().App };

  useEffect(() => {
    setTimeout(() => setLoaderVisibility(false), 1500);
  });

  return (
    <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap} onMouseMove={(e)=>setMouseCoords({x: e.pageX, y: e.pageY})}>
      <Cursor sizeId={sizeId} langId={langId} mouseCoords={mouseCoords} />
      {loaderVisibility
        ? <Loader sizeId={sizeId} langId={langId} />
        : <>
          <Header sizeId={sizeId} langId={langId} />
          <Main sizeId={sizeId} langId={langId} />
          <Footer sizeId='mobile' />
        </>
      }
    </CWrap>
  );
};

export default App;
