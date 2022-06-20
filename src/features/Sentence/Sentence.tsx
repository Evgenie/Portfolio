import { useTheme } from '@emotion/react';
import React, { useState } from 'react'
import { TElementProps } from '../../types';
import { CWrap, Last, WWrap } from './Sentence.styles';

export type IProps = TElementProps;


export const Sentence: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', } = props;
    const [sentence] = useState('YOUR WEB EXPERIENCE IS LOADING RIGHT NOW'.split(' '));
    //@ts-ignore
    const theme = { ...useTheme().Sentence };
    return (
        <>
            {sentence.map((word, index, arr) => {
                const length = arr.length;
                return (
                    <CWrap sizeId={sizeId} theme={theme.cwrap} key={word} style={{
                        flex: index === 0 || index === 2 ? '1 0 70%' : '',
                    }}>
                        {index !== length - 1
                            ? <WWrap sizeId={sizeId} theme={theme.wwrap} style={{
                                animationDelay: index === 1 || index === 2 ? '300ms' : index > 2 ? '500ms' : '',
                            }}>
                                {word}
                            </WWrap>
                            : <Last sizeId={sizeId} theme={theme.last}>
                                {word}
                            </Last>}
                    </CWrap>
                );
            })}
        </>
    );
}

export default Sentence;