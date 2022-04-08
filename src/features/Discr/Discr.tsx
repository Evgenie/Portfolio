import { useTheme } from '@emotion/react';
import React, { useState } from 'react'
import { TElementProps } from '../../definitions';
import { CWrap, WWrap } from './Discr.styles';

export type IProps = TElementProps;


export const Discr: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', } = props;
    const [sentence] = useState('WE DESIGN UNIQUE WEB / GRAPHIC EXPERIENCE'.split(' '));

    //@ts-ignore
    const theme = { ...useTheme().Discr };
    return (
        <>
            {sentence.map((word, index) =>
                <CWrap sizeId={sizeId} theme={theme.cwrap} key={word} style={index === 2 || index === 6 ? {
                    flex: '1 0 100%',
                    marginRight: '0',
                } : {}}>
                    <WWrap sizeId={sizeId} theme={theme.wwrap} style={index === 3 || index === 5 ? {
                        textDecoration: 'underline',
                    } : {}}>
                        {word}
                    </WWrap>
                </CWrap>
            )}
        </>
    );
}

export default Discr;