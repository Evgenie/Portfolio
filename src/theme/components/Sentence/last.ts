import { TCSSObjProps } from '../../../types';
import { lastWord } from './keyframes';

export const blocks: TCSSObjProps = {
	core: {
		fontSize: '7vw',
		marginRight: '0',
		paddingRight: '1vw',
		fontStyle: 'italic',
		transform: 'translateY(150%)',
		animation: `${lastWord} 4s ease 500ms`,
	},
	mobile: {},
	laptop: {},
	desktop: {},
};

export default blocks;
