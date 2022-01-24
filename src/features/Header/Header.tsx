import { useTheme } from '@emotion/react';
import React from 'react';
import { TSize } from '../../definitions/TElementProps';
import { CWrap } from './Header.styles';

export interface IProps {
    sizeId?: TSize;
    langId?: string;
    customise?: unknown;
}


export const Header: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', langId = 'ru', } = props;

    //@ts-ignore
    const theme = { ...useTheme().Header };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
            <h1>Header</h1>
        </CWrap>
    );
};

export default Header;