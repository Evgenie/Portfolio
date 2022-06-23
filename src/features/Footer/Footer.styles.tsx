import styled from '@emotion/styled';
import { TElementProps } from '../../types';
import { getCSSObj } from '../../utils';

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
	${getCSSObj}
`;

export type ICLogoProps = TElementProps;

export const Logo = styled.h1<ICLogoProps>`
	${getCSSObj}
`;

export type ICNavBarProps = TElementProps;

export const NavBar = styled.ul<ICNavBarProps>`
	${getCSSObj}
`;

export type ICLinkNavProps = TElementProps;

export const LinkNav = styled.li<ICLinkNavProps>`
	${getCSSObj}
`;
