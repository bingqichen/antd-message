import React from 'react';
import Message from '../../src/message';

describe('Message', () => {
  it('Component should be render', () => {
    Message.success('成功');
    expect(document.querySelectorAll('.component-message-wrap')[0]).toMatchSnapshot();
  });
});
