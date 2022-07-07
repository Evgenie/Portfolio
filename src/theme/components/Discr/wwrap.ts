import { TCSSObjProps } from '../../../types';
import { WRAP_DISCR_WRDS } from '../../mixins';

export const blocks: TCSSObjProps = {
	core: {
		...WRAP_DISCR_WRDS,
	},
	mobile: {},
	laptop: {},
	desktop: {},
};

export default blocks;
