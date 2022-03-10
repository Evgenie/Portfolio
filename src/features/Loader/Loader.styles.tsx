import styled from "@emotion/styled";
import { TElementProps } from "../../definitions"
import { getCSSObj } from "../../utils";

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
${getCSSObj}
`;

export type IP1Props = TElementProps;

export const P1 = styled.div<IP1Props>`
${getCSSObj}
`;

export type ICountProps = TElementProps;

export const Count = styled.div<ICountProps>`
${getCSSObj}
`;

export type IP2Props = TElementProps;

export const P2 = styled.div<IP2Props>`
${getCSSObj}
`;