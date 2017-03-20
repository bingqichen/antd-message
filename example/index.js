import React, { Component } from 'react';
import { render } from 'react-dom';
import cx from 'classnames';
import Message from '../dist/message/index.js';

import './style.less';

window.message = Message;

const Button = (props) => {
  const { type = 'primary', children, onClick = () => { } } = props;

  const cls = cx('button', type);
  return (
    <button className={cls} onClick={onClick}>{children}</button>
  );
};

class App extends Component {
  static handleClick(type, content) {
    window.message[type](content);
  }
  render() {
    return (
      <div className="app-wrap">
        <div>
          <Button type="primary" onClick={() => App.handleClick('success', '成功')}>成功提示</Button>
        </div>
        <div>
          <Button type="warn" onClick={() => App.handleClick('warn', '警告')}>警告提示</Button>
        </div>
        <div>
          <Button type="error" onClick={() => App.handleClick('error', '错误')}>错误提示</Button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
