import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Count.styles';

export type IProps = TElementProps;


export const Count: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru' } = props;
    const [counter, setCounter] = useState(0);
    const counterIncrement = (num = counter) => setCounter(num === 100 ? num : num += 1);

    useEffect(() => {
        const counterId = setInterval(counterIncrement, 30);
        return () => {
            clearInterval(counterId);
        }
    });
    //@ts-ignore
    const theme = { ...useTheme().Count };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
            {counter}-100
        </CWrap>
    );
}

export default Count;