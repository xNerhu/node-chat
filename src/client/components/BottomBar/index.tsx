import React from 'react';
import { observer } from 'mobx-react';

import { Root, Input } from './styles';

@observer
export default class BottomBar extends React.Component {
  render() {
    return (
      <Root>
        <Input />
      </Root>
    );
  }
}
