import { useTheme } from '@emotion/react';
import React, { useContext, useState } from 'react'
import MouseOver from '../../context/MouseOver';
import { TElementProps } from '../../definitions';
import { CWrap, WWrap } from './Discr.styles';

export type IProps = TElementProps;


export const Discr: React.FC<IProps> = (props): JSX.Element => {
    const { sizeId = 'mobile', } = props;
    const [sentence] = useState('WE DESIGN UNIQUE WEB / GRAPHIC EXPERIENCE'.split(' '));
    const { isMouseOver, handleMouseOver } = useContext(MouseOver);

    //@ts-ignore
    const theme = { ...useTheme().Discr };
    return (
        <>
            {sentence.map((word, index) =>
                <CWrap sizeId={sizeId} theme={theme.cwrap} key={word} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver} style={index === 2 || index === 6 ? {
                    flex: '1 0 100%',
                    marginRight: '0',
                } : {}}>
                    <WWrap sizeId={sizeId} theme={theme.wwrap} style={index === 3 || index === 5 ? {
                        textDecoration: isMouseOver ? 'none' :'underline',
                        WebkitTextStrokeWidth: isMouseOver ? '1px' : '',
                        WebkitTextStrokeColor: isMouseOver ?'white' : '',
                        color: isMouseOver ? 'transparent' : '',
                    } : {}}>
                        {word}
                    </WWrap>
                </CWrap>
            )}
        </>
    );
}

export default Discr;