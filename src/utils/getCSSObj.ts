/* eslint-disable @typescript-eslint/no-unsafe-return */
import { CSSObject } from "@emotion/react";
import { TSize } from "../definitions/TElementProps";

type TElementProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any;
  sizeId: TSize;
}

export const getCSSObj = ({ theme, sizeId }: TElementProps): CSSObject => {
  return {
    ...theme.core,
    ...theme[sizeId],
  };
};

export default getCSSObj;