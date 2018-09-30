import React from 'react';
import { observer } from 'mobx-react';

import store from '../../store';
import Conversations from '../Conversations';
import { Root } from './styles';

@observer
class App extends React.Component {
  render() {
    return (
      <Root>
        <Conversations />
      </Root>
    );
  }
}

export default App;
