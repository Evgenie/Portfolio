import React from 'react';
import { useTheme } from '@emotion/react';
import { TSize } from '../../types/TElementProps';
import { CWrap } from './Main.styles';
import Discr from '../../features/Discr';

export interface IProps {
  sizeId?: TSize;
  langId?: string;
  customise?: unknown;
}

export const Main: React.FC<IProps> = (props): JSX.Element => {
  const { sizeId = 'desktop', } = props;
  //@ts-ignore
  const theme = { ...useTheme().Main }
  return (
    <CWrap sizeId={sizeId} theme={theme.cwrap}>
      <Discr sizeId={sizeId} />
    </CWrap>
  );
};

export default Main;
