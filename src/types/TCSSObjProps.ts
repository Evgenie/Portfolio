import { CSSObject } from '@emotion/react';
import { TSize } from './';

export type TSectionName = 'core' | TSize;

export type TCSSObjProps = {
	[key in TSectionName]: CSSObject;
};

export default TCSSObjProps;
