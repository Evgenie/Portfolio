import { keyframes } from '@emotion/react';

export const show = keyframes({
	'0%, 100%': {
		opacity: '0',
	},
	'25%, 75%': {
		opacity: '1',
	},
});

export default {
	show,
};
