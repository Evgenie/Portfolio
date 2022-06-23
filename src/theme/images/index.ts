import buttons from './buttons';

export type TAllImages = typeof buttons;

export const allImages: TAllImages = {
	...buttons,
};

export const { BUTTON_MENU } = allImages;

export default allImages;
