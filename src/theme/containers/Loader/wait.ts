import { TCSSObjProps } from '../../../types';
import { show } from './keyframes';

export const blocks: TCSSObjProps = {
	core: {
		marginTop: '5vh',
		marginLeft: '22vw',
		lineHeight: '1.2',
		fontSize: '0.9vw',
		opacity: '0',
		animation: `${show} 3.5s ease 800ms forwards`,
	},
	mobile: {},
	laptop: {},
	desktop: {},
};

export default blocks;
