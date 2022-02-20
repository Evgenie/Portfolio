import '@emotion/react';
import { TCSSObjProps } from '.';
import theme from "../theme";

export type TThemes = typeof theme;

export type TThemesMembers = TThemes[keyof TThemes];

export type TThemesObjMembers = {
  [key in keyof TThemesMembers]: TCSSObjProps;
}

// declare module '@emotion/react' {
//   export interface Theme extends TThemes {}
// }