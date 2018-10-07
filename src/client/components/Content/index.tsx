import React from 'react';
import { observer } from 'mobx-react';

import Message from '../Message';
import NavigationDrawer from '../NavigationDrawer';
import MessageBar from '../MessageBar';
import { Root } from './styles';

@observer
export default class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationDrawer />
        <Root>
          <Message data={{ content: 'Hello!' }} />
          <Message data={{ content: 'Whats up?' }} />
          <MessageBar />
        </Root>
      </React.Fragment>
    );
  }
}
