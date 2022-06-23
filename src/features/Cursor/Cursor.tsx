import { useTheme } from '@emotion/react';
import React, { useState } from 'react';
import { TElementProps } from '../../types';
import useMousePosition from '../../Hooks';
import { CWrap } from './Cursor.styles';

export type IProps = TElementProps;

const Cursor: React.FC<IProps> = (props): JSX.Element => {
	const { sizeId = 'desktop' } = props;
	const [x, y] = useMousePosition();
	const [isMouseOver] = useState(false);

	//@ts-ignore
	const theme = { ...useTheme().Cursor };
	return (
		<CWrap
			sizeId={sizeId}
			theme={theme.cwrap}
			style={{
				transform: `translate(${x - 21}px, ${y - 21}px)`,
				width: `${isMouseOver ? '55.86px' : '42px'}`,
				height: `${isMouseOver ? '55.86px' : '42px'}`,
				display: x || y > 0 ? 'inline-block' : 'none',
			}}
		/>
	);
};

export default Cursor;
