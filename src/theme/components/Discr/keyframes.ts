import { keyframes } from '@emotion/react';

export const moveUp = keyframes({
	'0%': {
		transform: `translateY(150%)`,
	},
	'100%': {
		transform: `translateY(0)`,
	},
});

export default {
	moveUp,
};
