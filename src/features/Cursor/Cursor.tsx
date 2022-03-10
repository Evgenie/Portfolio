import { useTheme } from '@emotion/react';
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Cursor.styles';

export type IProps = TElementProps & {
    mouseCoords: { x: number, y: number };
    showLoader: boolean;
};

const Cursor: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', langId = 'ru', mouseCoords = { x: 0, y: 0 }, showLoader = true, } = props;
    //@ts-ignore
    const theme = { ...useTheme().Cursor };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap} style={{
            transform: showLoader ? 'none' : `translate(${mouseCoords.x - 21}px, ${mouseCoords.y - 21}px)`,
            display: showLoader ? 'none' : 'block',
        }} />
    )
}

export default Cursor;