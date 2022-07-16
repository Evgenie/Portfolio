import { CSSObject } from '@emotion/react';
import { moveUp } from '../keyframes';

export const WRAP_DISCR_WRDS: CSSObject = {
	display: 'inline-flex',
	fontSize: '7vw',
	animation: `${moveUp} 1s ease 4.5s forwards`,
	zIndex: '5',
};

export default {
	WRAP_DISCR_WRDS,
};
