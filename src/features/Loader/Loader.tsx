import React from 'react'
import { useTheme } from '@emotion/react';
import { TElementProps } from '../../definitions';
import Count from '../Count';
import { CWrap, Great, PWrap, Wait } from './Loader.styles';

export type IProps = TElementProps;


export const Loader: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', } = props;
    const sentence = 'YOUR WEB EXPERIENCE IS LOADING RIGHT NOW'.split(' ');

    //@ts-ignore
    const theme = { ...useTheme().Loader };
    return (
        <CWrap sizeId={sizeId} theme={theme.cwrap}>
            <Count sizeId={sizeId} />
            {sentence.map((word, index) =>
                <PWrap sizeId={sizeId} theme={theme.pwrap} key={word} style={{
                    flex: index === 0 || index === 2 ? '1 0 70%' : '',
                }}>
                    <Great sizeId={sizeId} theme={theme.great} style={{
                        animationDelay: index === 1 || index === 2 ? '300ms' : index > 2 ? '500ms' : '', 
                    }}>
                        {word} 
                    </Great> 
                </PWrap>
            )}
            <Wait sizeId={sizeId} theme={theme.wait}>
                Please wait <br /> a few seconds.
            </Wait>
        </CWrap>
    );
}

export default Loader;