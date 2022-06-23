import styled from '@emotion/styled';
import { TElementProps } from '../../types';
import { getCSSObj } from '../../utils';

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
	${getCSSObj}
`;

export type ICMenuProps = TElementProps;

export const Menu = styled.button<ICMenuProps>`
	${getCSSObj}
`;

export type ICButtonProps = TElementProps;

export const Button = styled.img<ICButtonProps>`
	${getCSSObj}
`;

export type ICLogoProps = TElementProps;

export const Logo = styled.div<ICLogoProps>`
	${getCSSObj}
`;

export type ICTerminProps = TElementProps;

export const Termin = styled.div<ICTerminProps>`
	${getCSSObj}
`;
