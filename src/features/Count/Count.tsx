import { useTheme } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { TElementProps } from '../../definitions';
import { CWrap } from './Count.styles';

export type IProps = TElementProps;


export const Count: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru' } = props;
    const [counter, setCounter] = useState(0);
    const counterIncrement = (num = counter, set = setCounter): unknown => {
        set(num);
        return num === 100
            ? num
            : setTimeout(() => counterIncrement(++num, set), 30);
    }
    useEffect(() => {
        counterIncrement(counter, setCounter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    //@ts-ignore
    const theme = { ...useTheme().Count };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
            {counter}-100
        </CWrap>
    );
}

export default Count;