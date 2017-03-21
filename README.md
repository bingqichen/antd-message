# antd-message
Global message like ant-design

高仿 ant-design 全局消息提示

## Installing
Using npm:
```javascript
$ npm install antd-message --save
```
Using yarn:
```javascript
$ yarn add antd-message
```

## Example
```javascript
import Message from 'antd-message';
window.message = Message;
message.success(content, timeout)
```
![Renderings](https://ooo.0o0.ooo/2017/03/20/58cfb9c34845f.png)

## Options
Three types: `message.success`、`message.warn`、`message.error`

params    | summary                     | type     | default
--------- | --------------------------- | -------- | ---------
`content` | message content             | `String` | -
`timeout` | timeout the message unmount | `Number` | 3000 (ms)

## License
MIT
