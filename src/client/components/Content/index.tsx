import React from 'react';
import { observer } from 'mobx-react';

import store from '@client/store';
import Message from '../Message';
import BottomBar from '../BottomBar';
import { Root } from './styles';

@observer
export default class Content extends React.Component {
  render() {
    return (
      <Root>
        {store.messages.map((message, key) => {
          return <Message data={message} key={key} />;
        })}
        <BottomBar />
      </Root>
    );
  }
}
