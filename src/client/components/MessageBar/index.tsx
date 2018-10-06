import React from 'react';
import { observer } from 'mobx-react';

import { Root, Input } from './styles';

@observer
export default class MessageBar extends React.Component {
  render() {
    return (
      <Root>
        <Input spellCheck={false} />
      </Root>
    );
  }
}
