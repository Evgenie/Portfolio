import React from 'react';
import { useTheme } from '@emotion/react';
import { TSize } from '../../definitions/TElementProps';
import { CWrap, Discr } from './Main.styles';

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
      <Discr sizeId={sizeId} theme={theme.discr}>
        WE DESIGN <br /> UNIQUE <br />
        WEB / GRAPHIC <br />
        EXPERIENCE
      </Discr>
    </CWrap>
  );
};

export default Main;
