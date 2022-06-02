import styled from "@emotion/styled";
import { TElementProps } from "../../types";
import { getCSSObj } from "../../utils";

export type ICWrapProps = TElementProps;

export const CWrap = styled.nav<ICWrapProps>`
${getCSSObj}
`;

export type ICLinkNavProps = TElementProps;

export const LinkNav = styled.li<ICLinkNavProps>`
${getCSSObj}
`;