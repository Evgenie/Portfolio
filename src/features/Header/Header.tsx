import { useTheme } from '@emotion/react';
import React, { useContext, useState } from 'react';
import { MouseContext } from '../../context/MouseContext';
import { TSize } from '../../definitions/TElementProps';
import { BUTTON_MENU } from '../../theme/images';
import Navbar from '../Navbar';
import { Button, CWrap, Logo, Menu, Termin } from './Header.styles';

export interface IProps {
    sizeId?: TSize;
    langId?: string;
    customise?: unknown;
}


export const Header: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', } = props;
    const mouse = useContext(MouseContext);
    const [getMouseOver, setGetMouseOver] = useState(false);
    const handleMouseOver = () => setGetMouseOver(true);
    const handleMouseOut = () => setGetMouseOver(false);

    //@ts-ignore
    const theme = { ...useTheme().Header };
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <Menu sizeId={sizeId} theme={theme.menu}>
                <Button sizeId={sizeId} theme={theme.button} src={BUTTON_MENU} alt='button' />
            </Menu>
            <Logo sizeId={sizeId} theme={theme.logo} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={getMouseOver ? {
                transform: `translate(${mouse.x - 250}px, ${mouse.y-100}px)`,
            } : {}}>
                Header
            </Logo>
            <Termin sizeId={sizeId} theme={theme.termin}>
                <p>
                    Obys&mdash;<br />
                    Creative <br />
                    Design <br />
                    Agency
                </p>
            </Termin>
            <Navbar sizeId={sizeId} theme={theme.navbar} />
        </CWrap>
    );
};

export default Header;