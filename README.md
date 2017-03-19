# antd-message
高仿 ant-design 全局消息提示

### 使用

使用`npm`安装：`npm install antd-message --save`

如果你使用`yarn`也可以使用：`yarn add antd-message`

在你的文件中引入即可使用；

```javascript
import Message from 'antd-message';
window.message = Message;
message.success(content, timeout)
```

### 可选项

可选三种提示类型，`message.success`、`message.warn`、`message.error`分别代表成功、警告、错误提示；

| 参数        | 说明            | 可选值  | 默认值    |
| --------- | ------------- | ---- | ------ |
| `content` | 提示内容          | -    | -      |
| `timeout` | 提示展示时间(不建议修改) | -    | 3000ms |
