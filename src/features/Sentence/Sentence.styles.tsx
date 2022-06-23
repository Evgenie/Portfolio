import styled from '@emotion/styled';
import { TElementProps } from '../../types';
import { getCSSObj } from '../../utils';

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
	${getCSSObj}
`;

export type IWWrapProps = TElementProps;

export const WWrap = styled.div<IWWrapProps>`
	${getCSSObj}
`;

export type ILastProps = TElementProps;

export const Last = styled.div<ILastProps>`
	${getCSSObj}
`;
