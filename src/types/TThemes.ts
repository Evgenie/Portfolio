import '@emotion/react';
import { TCSSObjProps } from '.';
import theme from '../theme';

export type TThemes = typeof theme;

// declare module '@emotion/react' {
// 	export interface Theme extends TThemes {
// 		[index: string]: TCSSObjProps;
// 	}
// }
