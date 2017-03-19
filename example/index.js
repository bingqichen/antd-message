import React, { Component } from 'react';
import { render } from 'react-dom';
import Message from '../dist/message/index.js';

window.message = Message;

const Button = (props) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick}>{children}</button>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(type, content) {
    window.message[type](content);
  }
  render() {
    return (
      <div className="app-wrap">
        <div>
          <Button onClick={() => this.handleClick('success', '成功')}>成功提示</Button>
        </div>
        <div>
          <Button onClick={() => this.handleClick('warn', '警告')}>警告提示</Button>
        </div>
        <div>
          <Button onClick={() => this.handleClick('error', '错误')}>错误提示</Button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
