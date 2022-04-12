import { useTheme } from '@emotion/react';
import React, { useContext } from 'react'
import MouseContext from '../../context/MouseContext';
import MouseOver from '../../context/MouseOver';
import { TElementProps } from '../../definitions';
import { CWrap } from './Cursor.styles';

export type IProps = TElementProps;

const Cursor: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', } = props;
    const mouseCoords = useContext(MouseContext);
    const { isMouseOver } = useContext(MouseOver);

    //@ts-ignore
    const theme = { ...useTheme().Cursor };
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} style={{
            transform: `translate(${mouseCoords.x - 21}px, ${mouseCoords.y - 21}px)`,
            width: `${isMouseOver ? '55.86px' : '42px'}`,
            height: `${isMouseOver ? '55.86px' : '42px'}`,
            display: mouseCoords.x || mouseCoords.y > 0 ? 'inline-block' : 'none',
        }} />
    )
}

export default Cursor;