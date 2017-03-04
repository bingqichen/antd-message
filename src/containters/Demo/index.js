import React, { Component } from 'react';
import Button from '~/button';

import './style.less';

export default class Demo extends Component {
  static handleClick() {
    message.success('成功消息');
  }
  render() {
    return (
      <Button onClick={this.constructor.handleClick}>成功消息</Button>
    );
  }
}
