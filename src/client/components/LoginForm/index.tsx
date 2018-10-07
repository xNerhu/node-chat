import React from 'react';
import { observer } from 'mobx-react';

import Textfield from '../Textfield';
import { Root, Button } from './styles';
import { requestAPI } from '@client/utils';

interface Props {
  history?: any;
}

@observer
export default class LoginForm extends React.Component<Props, {}> {
  private loginTextfield: Textfield;
  private passwordTextfield: Textfield;

  private onOKClick = async () => {
    const data = await requestAPI(
      {
        username: this.loginTextfield.getValue(),
        password: this.passwordTextfield.getValue(),
      },
      'login',
      'POST',
    );

    if (data.success) {
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <Root>
        <Textfield ref={r => (this.loginTextfield = r)} label="Login" />
        <Textfield
          ref={r => (this.passwordTextfield = r)}
          label="Password"
          style={{ marginTop: 24 }}
        />
        <Button onClick={this.onOKClick}>OK</Button>
      </Root>
    );
  }
}
