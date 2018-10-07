import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Content from '../Content';
import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import { Root } from './styles';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Route exact path="/" component={Content} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
        </Root>
      </BrowserRouter>
    );
  }
}

export default App;
