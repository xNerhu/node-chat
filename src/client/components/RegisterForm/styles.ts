import styled from 'styled-components';

import { centerBoth, shadows } from '@client/mixins';

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
