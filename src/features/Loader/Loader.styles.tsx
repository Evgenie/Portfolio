import styled from "@emotion/styled";
import { TElementProps } from "../../definitions"
import { getCSSObj } from "../../utils";

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
${getCSSObj}
`;

export type IPWrapProps = TElementProps;

export const PWrap = styled.div<IPWrapProps>`
${getCSSObj}
`;

export type IWaitProps = TElementProps;

export const Wait = styled.div<IWaitProps>`
${getCSSObj}
`;

export type IGreatProps = TElementProps;

export const Great = styled.div<IGreatProps>`
${getCSSObj}
`;