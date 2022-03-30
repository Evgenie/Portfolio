import { CSSObject } from "@emotion/react";
import { TCSSObjProps } from "../definitions";
import { TSize } from "../definitions/TElementProps";

type TElementProps = {
  theme: TCSSObjProps;
  sizeId: TSize;
}

export const getCSSObj = ({ theme, sizeId }: TElementProps): CSSObject => {
  return {
    ...theme.core,
    ...theme[sizeId],
  };
};

export default getCSSObj;