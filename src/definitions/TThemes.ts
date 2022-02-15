import '@emotion/react';
import themes from "../theme";

export type TThemes = typeof themes;

// export type TThemesMembers = {
//   [key in keyof typeof themes[keyof TThemes]]: TCSSObjProps;
// }

declare module '@emotion/react' {
  export interface Theme {
    fullTheme: TThemes;
  }
}