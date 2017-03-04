import React from 'react';
import { render } from 'react-dom';

import Message from '~/message';
import '~/style/global.less';

import App from './containters/App';
import Demo from './containters/Demo';

window.message = Message;

render(<App><Demo /></App>, document.getElementById('root'));
