import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import { TElementProps } from '../../types';
import { CWrap, HWWrope, WWrap } from './Discr.styles';

export type IProps = TElementProps;

export const Discr: React.FC<IProps> = (props): JSX.Element => {
	const { sizeId = 'mobile' } = props;
	const [sentence] = useState(
		'WE DESIGN UNIQUE WEB / GRAPHIC EXPERIENCE'.split(' ')
	);
	const [isMouseOver, setIsMouseOver] = useState(false);
	const handleMouseOver = () => setIsMouseOver(!isMouseOver);

	//@ts-ignore
	const theme = { ...useTheme().Discr };
	return (
		<>
			{sentence.map((word, index) => (
				<CWrap
					sizeId={sizeId}
					theme={theme.cwrap}
					key={word}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOver}
					style={
						index === 2 || index === 6
							? {
									flex: '1 0 100%',
									marginRight: '0',
							  }
							: {}
					}
				>
					{index === 3 || index === 5 ? (
						<HWWrope sizeId={sizeId} theme={theme.hwwrap}>
							{word}
						</HWWrope>
					) : (
						<WWrap sizeId={sizeId} theme={theme.wwrap}>
							{word}
						</WWrap>
					)}
				</CWrap>
			))}
		</>
	);
};

export default Discr;
