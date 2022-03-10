import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { TElementProps } from '../../definitions';
import { Count, CWrap, P1, P2 } from './Loader.styles';

export type IProps = TElementProps;

const Loader: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru' } = props;
    const [counter, setCounter] = useState(0);

    const counterIncrement = (num: number) => num === 100 ? num : num += 1;

    useEffect(() => {
        const counterId = setInterval(() => setCounter(counterIncrement(counter)), 10);
        return () => {
            clearInterval(counterId)
        }
    })


    //@ts-ignore
    const theme = { ...useTheme().Loader };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
            <P1 sizeId={sizeId} theme={theme.p1}>
                <Count sizeId={sizeId} theme={theme.count}>
                    {counter}-100
                </Count>
                YOUR WEB EXPERIENCE IS LOADING RIGHT NOW YOUR WEB EXPERIENCE IS LOADING RIGHT NOW
            </P1>
            <P2 sizeId={sizeId} theme={theme.p2}>
                Please waite a few seconds.
            </P2>
        </CWrap>
    )
}

export default Loader;