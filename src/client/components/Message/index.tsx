import React from 'react';

import { Root } from './styles';

interface Props {
  data: any;
}

export default class Message extends React.Component<Props, {}> {
  render() {
    const { data } = this.props;

    return <Root>{data.content}</Root>;
  }
}
