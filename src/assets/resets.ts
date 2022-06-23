import { css } from '@emotion/react';

export const resets = css({
	'*': {
		margin: '0',
		padding: '0',
		boxSizing: 'border-box',
	},
	html: {
		height: '100%',
	},
	body: {
		width: '100vw',
		backgroundColor: '#151515',
		color: '#ffffff',
		lineHeight: '1.5',
		fontFamily:
			'Arimo, "Helvetica Neue", HelveticaNeue, "TeX Gyre Heros", TeXGyreHeros, FreeSans, "Nimbus Sans L", "Liberation Sans", Arimo, Helvetica, Arial, sans-serif',
		fontSize: 'calc(14px + 2*(100vw - 320px)/1600)',
	},
});

export default resets;
