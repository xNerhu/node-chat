import React from 'react';
import { observer } from 'mobx-react';

import Textfield from '../Textfield';
import { Root, Button } from './styles';

@observer
export default class LoginForm extends React.Component {
  render() {
    return (
      <Root>
        <Textfield label="Login" />
        <Textfield label="Password" style={{ marginTop: 24 }} />
        <Button>OK</Button>
      </Root>
    );
  }
}
