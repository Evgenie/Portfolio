import React from 'react'
import { useTheme } from '@emotion/react';
import { TElementProps } from '../../definitions';
import Count from '../Count';
import { CWrap, Great, Wait } from './Loader.styles';

export type IProps = TElementProps;


export const Loader: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', langId = 'ru' } = props;
    const sentence = 'YOUR WEB EXPERIENCE IS LOADING RIGHT NOW';

    //@ts-ignore
    const theme = { ...useTheme().Loader };
    return (
        <CWrap sizeId={sizeId} langId={langId} theme={theme.cwrap}>
            <Count sizeId={sizeId} langId={langId} />
                <Great sizeId={sizeId} theme={theme.great}>
                    {sentence}
                </Great>
            <Wait sizeId={sizeId} theme={theme.wait}>
                Please wait <br /> a few seconds.
            </Wait>
        </CWrap>
    );
}

export default Loader;