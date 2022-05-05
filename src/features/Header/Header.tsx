import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import { TSize } from '../../definitions/TElementProps';
import useMousePosition from '../../Hooks';
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
    const [x, y] = useMousePosition();
    const [isMouseOver, setIsMouseOver] = useState(false);
    const handleMouseOver = () => setIsMouseOver(!isMouseOver);
    //@ts-ignore
    const theme = { ...useTheme().Header };
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <Menu sizeId={sizeId} theme={theme.menu}>
                <Button sizeId={sizeId} theme={theme.button} src={BUTTON_MENU} alt='button' />
            </Menu>
            <Logo sizeId={sizeId} theme={theme.logo} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} style={isMouseOver ? {
                transform: `translate(${x - 200}px, ${y-100}px)`,
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