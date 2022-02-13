import '@emotion/react'
import themes from "../theme";

export type TThemes = typeof themes;

declare module '@emotion/react' {
  export interface Theme {
    theme: TThemes;
  }
}