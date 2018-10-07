import styled from 'styled-components';

import { transparency, colors } from '@/constants/client';
import { robotoRegular } from '@client/mixins';

export const Root = styled.div`
  width: 100%;
  position: absolute;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: calc(100% - 64px);
  height: 48px;
  border: none;
  padding-left: 18px;
  padding-right: 18px;
  outline: none;
  border: none;
  border-radius: 25px;
  -webkit-text-fill-color: transparent;
  background-color: rgba(0, 0, 0, 0.06);
  font-size: 16px;
  text-shadow: ${`0px 0px 0px rgba(0, 0, 0,${transparency.light.primaryText})`};
  color: ${colors.indigo['500']};

  ${robotoRegular()};
`;
