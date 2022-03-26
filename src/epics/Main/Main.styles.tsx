import styled from '@emotion/styled';
import { getCSSObj } from '../../utils';
import { TElementProps } from '../../definitions';

export type ICWrapProps = TElementProps;

export const CWrap = styled.div<ICWrapProps>`
  ${getCSSObj}
`;

export type IDiscrProps = TElementProps;

export const Discr = styled.div<IDiscrProps>`
  ${getCSSObj}
`;