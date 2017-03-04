import React, { PropTypes } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Icon from '~/icon';

import './style.less';

const GlobalMessage = (props) => {
  const { type, content } = props;
  return (
    <div className="type">
      <Icon type={type} />
      <p>{content}</p>
    </div>
  );
};

GlobalMessage.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default class Message {
  static success(content, timeout) {
    this.message('success', content, timeout);
  }
  static warn(content, timeout) {
    this.message('warn', content, timeout);
  }
  static error(content, timeout) {
    this.message('error', content, timeout);
  }
  static message(type, content, timeout = 2000) {
    const container = document.createElement('div');
    container.setAttribute('class', 'component-message-wrap');
    container.setAttribute('style', `animation-duration:${timeout}ms`);
    document.body.appendChild(container);
    render(<GlobalMessage type={type} content={content} />, container);
    setTimeout(() => {
      unmountComponentAtNode(container);
      container.remove();
    }, timeout);
  }
}
