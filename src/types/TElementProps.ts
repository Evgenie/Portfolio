import TCSSObjProps from "./TCSSObjProps";

export type TSize = 'mobile' | 'laptop' | 'desktop';

export interface TElementProps {
    sizeId: TSize;
    theme?: TCSSObjProps;
    langId?: string;
}

export default TElementProps;