import { useTheme } from '@emotion/react';
import React from 'react';
import { TSize } from '../../definitions/TElementProps';
import { BUTTON_MENU } from '../../theme/images';
import { Button, CWrap, HeaderItems, LeftHeader, LinkNav, Logo, Menu, NavBar, RightHeader, Termin } from './Header.styles';

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
            <HeaderItems sizeId={sizeId} theme={theme.headeritems}>
                <LeftHeader sizeId={sizeId} langId={langId} theme={theme.leftheader}>
                    <Menu sizeId={sizeId} theme={theme.menu} disabled>
                        <Button sizeId={sizeId} theme={theme.button} src={BUTTON_MENU} alt='button' />
                    </Menu>
                    <Logo sizeId={sizeId} theme={theme.logo}>Header</Logo>
                </LeftHeader>
                <RightHeader sizeId={sizeId} theme={theme.rightheader}>
                    <Termin sizeId={sizeId} theme={theme.termin}>
                        <p>
                            Obys&mdash;<br />
                            Creative <br />
                            Design <br />
                            Agency
                        </p>
                    </Termin>
                    <NavBar sizeId={sizeId} theme={theme.navbar}>
                        <LinkNav sizeId={sizeId} theme={theme.linknav}>Works</LinkNav>
                        <LinkNav sizeId={sizeId} theme={theme.linknav}>About</LinkNav>
                        <LinkNav sizeId={sizeId} theme={theme.linknav}>Contacts</LinkNav>
                    </NavBar>
                </RightHeader>
            </HeaderItems>
        </CWrap>
    );
};

export default Header;