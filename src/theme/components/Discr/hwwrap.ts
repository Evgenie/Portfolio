import { TCSSObjProps } from '../../../types';
import { WRAP_DISCR_WRDS } from '../../mixins';

export const blocks: TCSSObjProps = {
	core: {
		...WRAP_DISCR_WRDS,
		textDecoration: 'underline',
		'&:hover': {
			textDecoration: 'none',
			WebkitTextStrokeWidth: '1px',
			WebkitTextStrokeColor: 'white',
			color: 'transparent',
		},
	},
	mobile: {},
	laptop: {},
	desktop: {},
};

export default blocks;
