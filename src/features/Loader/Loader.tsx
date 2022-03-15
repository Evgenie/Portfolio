import React from 'react'
import { useTheme } from '@emotion/react';
import { TElementProps } from '../../definitions';
import Count from '../Count';
import { CWrap, Great, Wait } from './Loader.styles';

export type IProps = TElementProps;


export const Loader: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru' } = props;
    const sentence = 'YOUR WEB EXPERIENCE IS LOADING RIGHT NOW'.split(' ');

    //@ts-ignore
    const theme = { ...useTheme().Loader };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
            <Count sizeId={sizeId} langId={langId} />
            {sentence.map((wrld) =>
                <Great sizeId={sizeId} theme={theme.great} key={wrld}>
                    {wrld}
                </Great>
            )}
            <Wait sizeId={sizeId} theme={theme.wait}>
                <br /> Please waite a few seconds.
            </Wait>
        </CWrap>
    );
}

export default Loader;