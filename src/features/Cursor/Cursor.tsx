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
    const {isMouseOver} = useContext(MouseOver);
    //@ts-ignore
    const theme = { ...useTheme().Cursor };
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} style={{
            transform: `matrix(${isMouseOver ? 1.33 : 1}, 0, 0, ${isMouseOver ? 1.33 : 1}, ${mouseCoords.x - 21}, ${mouseCoords.y - 21})`,
        }} />
    )
}

export default Cursor;