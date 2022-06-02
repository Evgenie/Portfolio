import styled from "@emotion/styled";
import { TElementProps } from "../../types";
import { getCSSObj } from "../../utils";

export type ICWropProps = TElementProps;

export const CWrap = styled.div<ICWropProps>`
${getCSSObj}
`;