import { useTheme } from '@emotion/react';
import React, { useContext } from 'react'
import MouseContext from '../../context/MouseContext';
import { TElementProps } from '../../definitions';
import { CWrap } from './Cursor.styles';

export type IProps = TElementProps;

const Cursor: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', } = props;
    const mouseCoords = useContext(MouseContext);
    //@ts-ignore
    const theme = { ...useTheme().Cursor };
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} style={{
            transform: `matrix(1, 0, 0, 1, ${mouseCoords.x - 21}, ${mouseCoords.y - 21})`,
        }} />
    )
}

export default Cursor;