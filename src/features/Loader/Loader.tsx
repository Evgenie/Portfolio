import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Loader.styles';

export type IProps = TElementProps;

const Loader: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru' } = props;
    const [counter, setCounter] = useState(0);

    const counterIncrement = (num: number) => num += 1;

    useEffect(() => {
        const counterId = setInterval(()=>setCounter(counterIncrement(counter)), 10)

        return () => {
            clearInterval(counterId)
        }
    })


    //@ts-ignore
    const theme = { ...useTheme().Loader };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>{counter}</CWrap>
    )
}

export default Loader;