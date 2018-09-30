import React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import NavigationDrawer from '../NavigationDrawer';
import Content from '../Content';
import { Root } from './styles';

@observer
class App extends React.Component {
  componentDidMount() {
    store.messages = [
      {
        content: 'Message #1',
      },
      {
        content: 'Message #2',
      },
    ];
  }

  render() {
    return (
      <Root>
        <NavigationDrawer />
        <Content />
      </Root>
    );
  }
}

export default App;
