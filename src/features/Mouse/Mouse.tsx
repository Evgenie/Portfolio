import { useTheme } from '@emotion/react';
import React, { useState } from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Mouse.styles';

export type IProps = TElementProps & {
    render: (mouse: {x: number, y: number}) => JSX.Element; 
};

const Mouse: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'desktop', render } = props;
    const [moveMouse, setMoveMouse] = useState({ x: 0, y: 0 });
    const handleMoveMouse = (e: React.MouseEvent) => setMoveMouse({ x: e.clientX, y: e.clientY })

    //@ts-ignore
    const theme = { ...useTheme().Mouse };
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap} onMouseMove={handleMoveMouse}>
            {render(moveMouse)}
        </CWrap>
    )
}

export default Mouse;