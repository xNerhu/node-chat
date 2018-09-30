import React from 'react';

import { Root } from './styles';
import { MessageData } from '@/interfaces';

interface Props {
  data: MessageData;
}

export default class Message extends React.Component<Props, {}> {
  render() {
    const { data } = this.props;

    return <Root>{data.content}</Root>;
  }
}
