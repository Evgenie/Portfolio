import { CSSObject } from '@emotion/react';
import { TCSSObjProps } from '../types';
import { TSize } from '../types/';

type TElementProps = {
	theme: TCSSObjProps;
	sizeId: TSize;
};

export const getCSSObj = ({ theme, sizeId }: TElementProps): CSSObject => {
	return {
		...theme.core,
		...theme[sizeId],
	};
};

export default getCSSObj;
