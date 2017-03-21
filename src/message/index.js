import React, { PropTypes } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import cx from 'classnames';

import Icon from '~/icon';

import './style.less';

const GlobalMessage = (props) => {
  const { type, content } = props;
  const cls = cx(
    'message-content',
    type
  );
  return (
    <div className={cls}>
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
  static message(type, content, timeout = 3000) {
    const container = document.createElement('div');
    container.setAttribute('class', 'component-message-wrap');
    container.setAttribute('style', `-webkit-animation-duration: ${timeout}ms`);
    container.setAttribute('style', `animation-duration: ${timeout}ms`);
    document.body.appendChild(container);
    render(<GlobalMessage type={type} content={content} />, container);
    setTimeout(() => {
      unmountComponentAtNode(container);
      container.parentNode.removeChild(container);
    }, timeout);
  }
}
