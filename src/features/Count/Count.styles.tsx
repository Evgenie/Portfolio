import styled from "@emotion/styled";
import { TElementProps } from "../../types"
import { getCSSObj } from "../../utils";

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
${getCSSObj}
`;