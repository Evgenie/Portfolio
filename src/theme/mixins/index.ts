import { CSSObject } from '@emotion/react';
import { moveUp } from '../components/Discr/keyframes';

export const WRAP_DISCR_WRDS: CSSObject = {
	display: 'inline-flex',
	fontSize: '7vw',
	transform: 'translateY(150%)',
	animation: `${moveUp} 1s ease 4.5s forwards`,
	zIndex: '5',
};

export default {
	WRAP_DISCR_WRDS,
};
