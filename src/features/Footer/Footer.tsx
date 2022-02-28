import { useTheme } from '@emotion/react';
import React from 'react';
import { TSize } from '../../definitions/TElementProps';
import { CWrap, LinkNav, Logo, NavBar } from './Footer.styles';

export interface IProps {
    sizeId?: TSize;
    langId?: string;
    customise?: unknown;
}


export const Footer: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', langId = 'ru', } = props;

    //@ts-ignore
    const theme = { ...useTheme().Footer };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
            <Logo sizeId={sizeId} theme={theme.logo}>Footer</Logo>
            <NavBar sizeId={sizeId} theme={theme.navbar}>
                <LinkNav sizeId={sizeId} theme={theme.linknav}>Works</LinkNav>
                <LinkNav sizeId={sizeId} theme={theme.linknav}>About</LinkNav>
                <LinkNav sizeId={sizeId} theme={theme.linknav}>Contacts</LinkNav>
            </NavBar>
        </CWrap>
    );
};

export default Footer;