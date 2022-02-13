/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CSSObject } from "@emotion/react";
import TCSSObjProps from "../definitions/TCSSObjProps";
 
type TElementProps = {
    theme: TCSSObjProps;
    [index: string]: string;
}

export const getCSSObj = ({theme, sizeId}:TElementProps): TCSSObjProps => {
  return {
    ...theme.core,
    ...theme[sizeId],
  };
};

export default getCSSObj;