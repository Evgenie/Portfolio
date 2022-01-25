import styled from "@emotion/styled";
import { TElementProps } from "../../definitions";
import { getCSSObj } from "../../utils";

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
${getCSSObj}
`;

export type ICHeaderItemsProps = TElementProps;

export const HeaderItems = styled.div<ICHeaderItemsProps>`
${getCSSObj}
`;

export type ICLeftHeaderProps = TElementProps;

export const LeftHeader = styled.div<ICLeftHeaderProps>`
${getCSSObj}
`;

export type ICRightHeaderProps = TElementProps;

export const RightHeader = styled.div<ICRightHeaderProps>`
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

export const Logo = styled.h1<ICLogoProps>`
${getCSSObj}
`;

export type ICTerminProps = TElementProps;

export const Termin = styled.div<ICTerminProps>`
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