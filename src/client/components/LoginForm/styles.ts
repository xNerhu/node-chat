import styled from 'styled-components';

import { centerBoth, shadows, button } from '@client/mixins';
import { colors } from '@client/constants';

export const Root = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 32px 32px 24px 32px;
  position: absolute;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;

  box-shadow: ${shadows(2)};

  ${centerBoth()};
`;

export const Button = styled.div`
  width: 64px;
  height: 36px;
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 4px;
  margin-left: auto;
  cursor: pointer;
  background-color: ${colors.indigo['500']};
  box-shadow: ${shadows(2)};

  ${button()};
`;
