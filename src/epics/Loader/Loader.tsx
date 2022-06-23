import React from 'react';
import { useTheme } from '@emotion/react';
import { TElementProps } from '../../types';
import Count from '../../features/Count';
import { CWrap, Wait } from './Loader.styles';
import Sentence from '../../features/Sentence';

export type IProps = TElementProps;

export const Loader: React.FC<IProps> = (props): JSX.Element => {
	const { sizeId = 'mobile' } = props;
	//@ts-ignore
	const theme = { ...useTheme().Loader };

	return (
		<CWrap sizeId={sizeId} theme={theme.cwrap}>
			<Count sizeId={sizeId} />
			<Sentence sizeId={sizeId} />
			<Wait sizeId={sizeId} theme={theme.wait}>
				Please wait <br /> a few seconds.
			</Wait>
		</CWrap>
	);
};

export default Loader;
