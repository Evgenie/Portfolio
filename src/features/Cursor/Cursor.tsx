import { useTheme } from '@emotion/react';
import React from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Cursor.styles';

export type IProps = TElementProps & {
    mouseCoords: {x: number, y: number};
};

const Cursor: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', langId = 'ru', mouseCoords } = props;
    //@ts-ignore
    const theme = { ...useTheme().Cursor };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap} />
    )
}

export default Cursor;