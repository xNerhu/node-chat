import React from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter, Route } from 'react-router-dom';

import store from '../../store';
import Content from '../Content';
import LoginForm from '../LoginForm';
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
      <BrowserRouter>
        <Root>
          <Route exact path="/" component={Content} />
          <Route path="/login" component={LoginForm} />
        </Root>
      </BrowserRouter>
    );
  }
}

export default App;
