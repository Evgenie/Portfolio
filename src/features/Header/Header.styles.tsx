import styled from "@emotion/styled";
import { TElementProps } from "../../definitions";
import { getCSSObj } from "../../utils";

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

export const Logo = styled.h1<ICLogoProps>`
${getCSSObj}
`;

export type ICTerminProps = TElementProps;

export const Termin = styled.div<ICTerminProps>`
${getCSSObj}
`;