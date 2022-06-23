import { TCSSObjProps } from '../../../types';

export const blocks: TCSSObjProps = {
	core: {
		position: 'fixed',
		left: 0,
		top: 0,
		minWidth: '42px',
		minHeight: '42px',
		border: '1px solid #a4a4a4',
		borderRadius: '50%',
		transition: 'width 0.3s, height 0.3s',
	},
	mobile: {},
	laptop: {},
	desktop: {},
};

export default blocks;
