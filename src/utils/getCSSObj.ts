import * as TCSSObjProps from "../definitions/TCSSObjProps";

type IElementTheme = {
  [key in TCSSObjProps.TSectionName]: any;
};
 
type TElementProps = {
    theme: IElementTheme;
    [index: string]: any;
}

export const getCSSObj = (props: any): TElementProps => {
  return {
    ...props.theme.core,
    ...props.theme[props.sizeId],
  };
};

export default getCSSObj;